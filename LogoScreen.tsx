//LogoScreen.tsx
import React, { useState,useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
import ss from './styless';
const LogoScreen = ({ navigation }) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Başlangıçta beyaz bir arka plan

  useEffect(() => {
    const interval = setInterval(() => {
      // Rastgele bir renk oluştur
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 1700); // 500 milisaniyede bir değişecek

    return () => clearInterval(interval); // Temizleme
  }, []); // Sadece bir kere çalışması için boş bağımlılık dizisi
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 2000); // 3 saniye sonra TimerScreen'e yönlendir

    return () => clearTimeout(timer); // Komponent kaldırıldığında timer'ı temizle
  }, [navigation]);

  return (
    <View style={[ss.containerLogo, { backgroundColor }]}>
      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/2921/2921300.png?ga=GA1.1.1773380079.1710444504&' }}
        style={ss.logo}
      />
      <Text style={ss.uygulamaadtxt}>TimerAndNote</Text>
    </View>
  );
};


export default LogoScreen;
