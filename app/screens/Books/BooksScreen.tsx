import React, {useState, useEffect, useCallback} from 'react';
import { Card, Layout, List, ListItem, Text, Icon, Button } from "@ui-kitten/components";
import axios from 'axios';
import Header from "../../components/Header.tsx";
import { BackHandler, FlatList, Image, StyleSheet, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

// @ts-ignore
const BooksScreen = ({navigation}) => {

  const [books, setBooks] = useState([]);

  const data = [
    {
      id: '1',
      title: 'Lessons in Chemistry',
      author: 'Bonnie Garmus',
      imageUrl: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
      label: 'Fiqh',
    },
    {
      id: '2',
      title: 'The Comfort Book',
      author: 'Matt Haig',
      imageUrl: 'https://example.com/the-comfort-book.jpg',
      label: 'Aqidah',
    },
    {
      id: '3',
      title: 'The Dictionary of Lost Words',
      author: 'Pip Williams',
      imageUrl: 'https://example.com/dictionary-of-lost-words.jpg',
      label: 'Test',
    },
    {
      id: '4',
      title: 'You Could Make This Place Beautiful',
      author: 'Maggie Smith',
      imageUrl: 'https://example.com/you-could-make-this-place-beautiful.jpg',
      label: 'Test',
    },
  ];

  // @ts-ignore
  const BookItem = ({ item }) => (
    <Card style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.coverImage} />
      {item.label && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{item.label}</Text>
        </View>
      )}
      <View style={styles.overlay}>
        <Text style={styles.titleBook}>{item.title}</Text>
      </View>
    </Card>
  );


  // @ts-ignore
  const renderItem = ({ item }) => (
    <ListItem style={styles.listItem}>
      <BookItem item={item} />
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <View style={styles.title}>
        <Text style={styles.titleContent}> Bibliothèque </Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>

    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b5e20'
  },
  titleContent: {
    fontSize: 14,
    color: '#fff'
  },
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  listItem: {
    flex: 1,
    margin: 8,
  },
  card: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Important pour couper les bords des images
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  titleBook: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default BooksScreen;
