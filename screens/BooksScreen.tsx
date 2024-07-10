import React, {useState, useEffect, useCallback} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';
import Header from "../components/Header.tsx";
import { BackHandler, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

// @ts-ignore
const BooksScreen = ({navigation}) => {

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
    <Layout style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#daf6cf',
    padding: 12,
  },
  list: {
    justifyContent: 'center',
  },
});

export default BooksScreen;
