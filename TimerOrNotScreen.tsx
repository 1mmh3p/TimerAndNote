import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import ss from './styless';
const TimerOrNoteScreen = ({ navigation, route }) => {
  const { username } = route.params || {};

  const handleTimerButtonPress = () => {
    navigation.navigate('Timer');
  };

  const handleNoteButtonPress = () => {
    navigation.navigate('Note');
  };

  return (
    <View style={ss.containerTN}>
      <View style={ss.welcomeContainer}>
        <Text style={ss.welcomeText}>Hoşgeldin, {username}!</Text>
      </View>
      <View style={ss.buttonContainer}>
        <TouchableOpacity onPress={handleNoteButtonPress}>
          <View style={ss.button}>
            <Text style={ss.buttonText}>Not</Text>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/000/357/052/small/Education__2813_29.jpg' }}
              style={ss.buttonImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTimerButtonPress}>
          <View style={ss.button}>
            <Text style={ss.buttonText}>Timer</Text>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/7793/7793758.png?ga=GA1.1.1773380079.1710444504&' }}
              style={ss.buttonImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default TimerOrNoteScreen;