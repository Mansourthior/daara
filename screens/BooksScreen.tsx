import React, {useState, useEffect, useCallback} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';
import Header from "../components/Header.tsx";
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// @ts-ignore
const BooksScreen = ({navigation}) => {

  React.useEffect(() => {
    const onBackPress = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => backHandler.remove();
  }, []);

  // Désactiver le bouton de retour natif
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Désactiver le retour en arrière
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=islam')
      .then((response: {data: {items: React.SetStateAction<never[]>}}) =>
        setBooks(response.data.items),
      )
      .catch((error: any) => console.error(error));
  }, []);

  // @ts-ignore
  const renderItem = ({item}) => (
    <ListItem
      title={item.volumeInfo.title}
      description={item.volumeInfo.authors?.join(', ')}
    />
  );

  return (
    <Layout style={{flex: 1}}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <List
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default BooksScreen;
