import React, { useState, useEffect } from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import axios from 'axios';
import Header from "../components/Header.tsx";
import { StyleSheet } from "react-native";

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
    <Layout style={styles.container}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <List
        data={verses}
        renderItem={renderItem}
        keyExtractor={item => item.number.toString()}
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

export default QuranScreen;
