import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';
import Footer from "../components/Footer.tsx";

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
    <Layout style={{flex: 1}}>
      <List
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Footer onPress={() => navigation.navigate('Accueil')} />
    </Layout>
  );
};

export default BooksScreen;
