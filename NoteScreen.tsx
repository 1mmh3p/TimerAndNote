import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ss from './styless';

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [hideNotes, setHideNotes] = useState(true); 
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 3000);

    return () => clearInterval(interval); 
  }, []); 

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('@notes');
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error('Notları yüklerken bir hata oluştu:', error);
    }
  };

  const saveNotes = async (updatedNotes) => {
    try {
      await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error('Notları kaydederken bir hata oluştu:', error);
    }
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const currentTime = new Date();
      const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;
      const updatedNotes = [...notes, { title: newNote, text: newNote, time: formattedTime }];
      setNotes(updatedNotes);
      saveNotes(updatedNotes); 
      setNewNote('');
    }
  };

  const handleDeleteNote = index => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    saveNotes(updatedNotes); 
  };

  const toggleHideNotes = () => {
    setHideNotes(!hideNotes);
  };

  return (
    <View style={[ss.containerNote,{backgroundColor}]}>
      <View style={{ padding: 20, paddingTop: 50 }}>
        <TextInput
          style={ss.inputNote}
          multiline={true}
          placeholder="Not ekleyin..."
          value={newNote}
          onChangeText={text => setNewNote(text)}
        />
        <View style={{marginBottom:10}}>
          <Button title="Not Ekle" onPress={handleAddNote} />
        </View>
        <Button title={hideNotes ? "Notları Göster" : "Notları Gizle"} onPress={toggleHideNotes} />
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {notes.map((note, index) => (
          !hideNotes && (
            <View key={index} style={{ paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{index + 1}- {note.title}</Text>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>{note.text}</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginBottom: 5 }}>{note.time}</Text>
              <TouchableOpacity onPress={() => handleDeleteNote(index)}>
                <Text style={{ color: 'red' }}>Sil</Text>
              </TouchableOpacity>
            </View>
          )
        ))}
      </ScrollView>
    </View>
  );
};

export default NoteScreen;
