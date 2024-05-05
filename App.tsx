import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './LogoScreen';
import LoginScreen from './LoginScreen';
import TimerScreen from './TimerScreen';
import NoteScreen from './NoteScreen';
import TimerOrNoteScreen from './TimerOrNotScreen'; 

const Stack = createStackNavigator();

const screens = [ 
  { name: 'Logo', component: LogoScreen, options: { headerShown: false } },
  { name: 'Login', component: LoginScreen, options: { headerShown: false } },
  { name: 'Timer or Note', component: TimerOrNoteScreen, options: { headerShown: true } },
  { name: 'Timer', component: TimerScreen, options: { headerShown: true } },
  { name: 'Note', component: NoteScreen, options: { headerShown: true } }
];
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Note">
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name} 
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
