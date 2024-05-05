import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ss from './styless';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Başlangıçta beyaz bir arka plan

  useEffect(() => {
    // AsyncStorage'den kullanıcı adını kontrol et
    const checkUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('@username');
        if (storedUsername) {
          // Kullanıcı adı varsa, doğrudan Timer veya Not ekranına git
          navigation.navigate('Timer or Note', { username: storedUsername });
        }
      } catch (error) {
        console.error('Error checking username:', error);
      }
    };

    checkUsername(); // Kontrolü başlat

    const interval = setInterval(() => {
      // Rastgele bir renk oluştur
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 500); // 500 milisaniyede bir değişecek

    return () => clearInterval(interval); // Temizleme
  }, [navigation]); // navigation bağımlılığı eklendi

  const handleLogin = async () => {
    if (username.trim() !== '') {
      try {
        await AsyncStorage.setItem('@username', username);
        navigation.navigate('Timer or Note', { username });
      } catch (error) {
        console.error('Error saving username:', error);
      }
    } else {
      alert('Lütfen geçerli adınızı girin.');
    }
  };

  return (
    <View style={[ss.containerLogin, { backgroundColor }]}>
      <Image source={{ uri: 'https://cdn-icons-png.freepik.com/512/6681/6681204.png' }} style={{ width: 100, height: 100 , borderRadius:50, marginBottom:50}} />
      <TextInput 
        style={ss.inputLogin}
        placeholder="Adınızı girin" 
        value={username} 
        maxLength={15}
        onChangeText={text => setUsername(text)}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
