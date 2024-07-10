import React, { useState, useEffect } from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import axios from 'axios';

const HadithScreen = () => {
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    axios.get('https://api.sunnah.com/v1/collections/bukhari/books/1/hadiths', {
      headers: {
        'X-API-KEY': 'YOUR_SUNNAH_API_KEY'
      }
    })
      .then(response => setHadiths(response.data.data))
      .catch(error => console.error(error));
  }, []);

  // @ts-ignore
  const renderItem = ({ item }) => (
    <ListItem
      title={`Hadith ${item.hadithNumber}`}
      description={item.hadith[0].body}
    />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <List
        data={hadiths}
        renderItem={renderItem}
        keyExtractor={item => item.hadithNumber.toString()}
      />
    </Layout>
  );
};

export default HadithScreen;
