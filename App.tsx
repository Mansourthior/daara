import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BooksScreen from './screens/BooksScreen';
import FiqhScreen from './screens/FiqhScreen.tsx';
import HadithScreen from './screens/HadithScreen';
import QuranScreen from './screens/QuranScreen';
import SoufismeScreen from "./screens/SoufismeScreen.tsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name="Accueil" component={HomeScreen} />
          <Stack.Screen name="Books" component={BooksScreen} />
          <Stack.Screen name="Fiqh" component={FiqhScreen} />
          <Stack.Screen name="Hadith" component={HadithScreen} />
          <Stack.Screen name="Soufisme" component={SoufismeScreen} />
          <Stack.Screen name="Quran" component={QuranScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
