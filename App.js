import React from 'react';
import MyDrawer from './routes/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
  );
}

