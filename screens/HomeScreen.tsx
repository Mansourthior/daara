import React from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet, FlatList } from 'react-native';
import Card from '../components/Cards';
import Footer from "../components/Footer.tsx";

const sections = [
  { title: 'Bibliothèque', navigateTo: 'Books', image: require('../assets/bibliotheque.png')},
  { title: 'Fiqh', navigateTo: 'Fiqh', image: require('../assets/fiqh.png')},
  { title: 'Hadiths', navigateTo: 'Hadith', image: require('../assets/hadith.png')},
  { title: 'Soufisme', navigateTo: 'Soufisme', image: require('../assets/soufisme.png')},
  { title: 'Coran', navigateTo: 'Quran', image: require('../assets/quran.png')},
  { title: 'Q&R', navigateTo: 'QR', image: require('../assets/questions.png')},
];

// @ts-ignore
const HomeScreen = ({ navigation }) => {
  // @ts-ignore
  const renderItem = ({ item }) => (
    <Card  title={item.title}
           onPress={() => navigation.navigate(item.navigateTo)}
           image={item.image} />
  );

  return (
    <Layout style={styles.container}>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <Footer onPress={() => navigation.navigate('Accueil')} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  list: {
    justifyContent: 'center',
  },
});

export default HomeScreen;
