import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ss from './styless';
const TimerScreen = ({ navigation }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const scrollViewRef = useRef(null);
  const [isStopped, setIsStopped] = useState(false);
  const [lastStoppedTime, setLastStoppedTime] = useState(0);

  useEffect(() => {
    loadUsername(); // Kullanıcı adını yükle
    loadNotes(); // Kaydedilmiş notları yükle
  }, []);

  useEffect(() => {
    // Notları değiştikçe kaydet
    saveNotes();
  }, [notes]);

  const loadUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('@username');
      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    } catch (error) {
      console.error('Error loading username:', error);
    }
  };

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('@notes');
      if (savedNotes !== null) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('@notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  useEffect(() => {
    let interval = null;

    if (isActive && !isStopped) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if ((!isActive || isStopped) && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isStopped]);

  useEffect(() => {
    // Yeni not eklendiğinde ScrollView'i en alta kaydır
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [notes]);

  const handleStartStop = () => {
    if (!isActive) {
      // Zamanlayıcı başlatılıyor
      setIsActive(true);
      setIsStopped(false); // Başlat/Durdur butonuna basıldığında "Durduruldu" mesajını kaldırmak için
    } else {
      // Zamanlayıcı durduruluyor
      setIsActive(false);
      setIsStopped(true); // Durdurulduğunda "Durduruldu" mesajını göstermek için
      setLastStoppedTime(seconds);
    }
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
    setIsStopped(false);
    setLastStoppedTime(0);
  };

  const handleDelete = () => {
    setIsStopped(false); // Sıfırlama işlemi yapıldığında "Durduruldu" mesajını kaldırmak için
    setNotes([]); // Notları sıfırla
  };

  const handleAddNote = () => {
    const currentTime = new Date();
    const newNote = {
      time: currentTime,
      seconds: seconds,
    };
    // Notları tarihe göre sırala ve ekle
    setNotes(prevNotes => [...prevNotes, newNote].sort((a, b) => b.time - a.time));
    setNote('');
  };

  const handleNotePress = () => {
    navigation.navigate('Note');
  };

  const formatZaman = zaman => {
    const saat = Math.floor(zaman / 3600);
    const dakika = Math.floor((zaman % 3600) / 60);
    const saniye = zaman % 60;

    const formatSaat = saat.toString().padStart(2, '0');
    const formatDakika = dakika.toString().padStart(2, '0');
    const formatSaniye = saniye.toString().padStart(2, '0');

    return `${formatSaat}:${formatDakika}:${formatSaniye}`;
  };

  return (
    <View style={ss.containerTimer}>
      <View style={ss.background}>
        {/* Arka plan stilini burada tanımlayabilirsiniz */}
      </View>
      <View style={ss.timerView}>
        <View style={ss.timerBox}>
          <Text style={ss.timerText}>{isActive ? formatZaman(seconds) : formatZaman(lastStoppedTime)}</Text>
        </View>
        <ScrollView
          ref={scrollViewRef}
          style={ss.scrollView}
          contentContainerStyle={ss.scrollViewContent}
        >
          {notes.map((noteItem, index) => (
            <View key={index} style={ss.noteContainer}>
              <Text style={ss.noteText}>{`${index + 1}: ${noteItem.time.toLocaleString()} - ${formatZaman(noteItem.seconds)}`}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={ss.buttonContainer}>
          <View style={ss.buttonGroup}> 
            <Button
              title={isActive ? 'Dur' : 'Başlat'}
              onPress={handleStartStop}
            />
            <Button title="Ekle" onPress={handleAddNote} />
          </View>
          <View style={ss.buttonGroup}>
            <Button title="Sıfırla" onPress={handleReset} />
            <Button title="Kayıt Sil" onPress={handleDelete} />
          </View>
        </View>
      </View>
    </View>
  );
};


export default TimerScreen;
