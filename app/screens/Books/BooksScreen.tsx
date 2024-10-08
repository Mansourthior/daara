import React, {useState, useEffect, useCallback} from 'react';
import { Card, Layout, List, ListItem, Text, Icon, Button } from "@ui-kitten/components";
import axios from 'axios';
import Header from "../../components/Header.tsx";
import { BackHandler, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

// @ts-ignore
const BooksScreen = ({navigation}) => {

  const [books, setBooks] = useState([]);

  const themes = [
    { id: 1, title: 'Fiqh', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Aqidah', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Hadiths', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Tidianiya', image: 'https://via.placeholder.com/100' },
  ];

  const data = [
    { id: '1', title: 'Outlive', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'The Great Gatsby', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Seven Husbands of Evelyn Hugo', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Thing We Never Got Over', image: 'https://via.placeholder.com/150' },
    { id: '5', title: 'A Court of Thorns and Roses', image: 'https://via.placeholder.com/150' },
    { id: '6', title: 'Steve Jobs', image: 'https://via.placeholder.com/150' },
    { id: '7', title: 'Greenlights', image: 'https://via.placeholder.com/150' },
    { id: '8', title: 'The Subtle Art of Not Giving a F*ck', image: 'https://via.placeholder.com/150' },
    { id: '9', title: 'American Prometheus', image: 'https://via.placeholder.com/150' }
  ];

  // @ts-ignore
  const retrieveBooks = (item) => {
    // find book and update data
    console.log(' ' + item.title);
  }

  // @ts-ignore
  const handleBookPress = (item) => {
    // find book and update data
    console.log(' ' + item.title);
  }

  // @ts-ignore
  const BookItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBookPress(item)} style={styles.bookContainer}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );


  // @ts-ignore
  const renderItem = ({ item }) => (
      <BookItem item={item} />
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
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          {themes.map((item) => (
            <TouchableOpacity onPress={() => retrieveBooks(item)}>
            <View key={item.id} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.circularImage} />
              <Text style={styles.titleMenu}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b5e20'
  },
  titleContent: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
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
  scrollView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#73dd75',
    borderRadius: 20,
    paddingBottom: 30,
    marginBottom: 15
  },
  itemContainer: {
    width: 120,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10
  },
  circularImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  titleMenu: {
    fontSize: 12,
    textAlign: 'center',
    color: '#1b5e20',
    fontWeight: '400'
  },
  grid: {
    paddingHorizontal: 10,
  },
  bookContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 5,
    borderRadius: 20
  },
  bookTitle: {
    textAlign: 'center',
    fontSize: 14,
  }
});

export default BooksScreen;
