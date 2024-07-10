import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';

const BooksScreen = () => {
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
    // eslint-disable-next-line react-native/no-inline-styles
    <Layout style={{flex: 1}}>
      <List
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default BooksScreen;
