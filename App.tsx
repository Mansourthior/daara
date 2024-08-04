import React, { useEffect } from "react";
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import BooksScreen from './app/screens/BooksScreen';
import FiqhScreen from './app/screens/FiqhScreen.tsx';
import HadithScreen from './app/screens/HadithScreen';
import SoufismeScreen from "./app/screens/SoufismeScreen.tsx";
import QRScreen from "./app/screens/QRScreen.tsx";
import SettingsScreen from "./app/screens/SettingsScreen.tsx";
import AqidahScreen from "./app/screens/AqidahScreen.tsx";
import SouratesScreen from "./app/screens/Quran/SouratesScreen.tsx";
import VersetScreen from "./app/screens/Quran/VersetScreen.tsx";
import store from "./app/redux/store";
import { Provider } from 'react-redux';


const Stack = createStackNavigator();

export default function App() {
  const hideHeader = { headerShown: false };
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Accueil">
            <Stack.Screen name="Accueil" component={HomeScreen} options={hideHeader}/>
            <Stack.Screen name="Books" component={BooksScreen} options={hideHeader}/>
            <Stack.Screen name="Fiqh" component={FiqhScreen} options={hideHeader}/>
            <Stack.Screen name="Hadith" component={HadithScreen} options={hideHeader}/>
            <Stack.Screen name="Soufisme" component={SoufismeScreen} options={hideHeader}/>
            <Stack.Screen name="QR" component={QRScreen} options={hideHeader}/>
            <Stack.Screen name="Settings" component={SettingsScreen} options={hideHeader}/>
            <Stack.Screen name="Aqidah" component={AqidahScreen} options={hideHeader}/>
            <Stack.Screen name="Quran" component={SouratesScreen} options={hideHeader} />
            <Stack.Screen name="Verses" component={VersetScreen} options={hideHeader} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
