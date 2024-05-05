
// Depolamak.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem('@notes', JSON.stringify(notes));
    console.log('Notlar başarıyla kaydedildi.');
  } catch (e) {
    console.error('Notları kaydetme hatası:', e);
  }
};

export const loadNotes = async () => {
  try {
    const savedNotes = await AsyncStorage.getItem('@notes');
    if (savedNotes !== null) {
      return JSON.parse(savedNotes);
    }
  } catch (e) {
    console.error('Notları yükleme hatası:', e);
    return [];
  }
};
