import React, { useState, useEffect } from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import axios from 'axios';
import Footer from "../components/Footer.tsx";

// @ts-ignore
const QuranScreen = ({navigation}) => {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    axios.get('https://api.alquran.cloud/v1/surah/1')
      .then(response => setVerses(response.data.data.ayahs))
      .catch(error => console.error(error));
  }, []);

  // @ts-ignore
  const renderItem = ({ item }) => (
    <ListItem
      title={`Ayah ${item.number}`}
      description={item.text}
    />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <List
        data={verses}
        renderItem={renderItem}
        keyExtractor={item => item.number.toString()}
      />
      <Footer onPress={() => navigation.navigate('Accueil')} />
    </Layout>
  );
};

export default QuranScreen;
