import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";
import { getSourates } from '../../services/quranService';
import Header from "../../components/Header.tsx";
import { Layout } from "@ui-kitten/components";

// @ts-ignore
const SouratesScreen = ({ navigation }) => {
  const [sourates, setSourates] = useState([]);
  const [loading, setLoading] = useState(true);
  const img = require('../../assets/frame.png');

  useEffect(() => {
    const fetchSourates = async () => {
      try {
        const data = await getSourates();
        setSourates(data);
      } catch (error) {
        console.error(error);
        // todo : search into sqlite
      } finally {
        setLoading(false);
      }
    };

    fetchSourates();
  }, []);

  // @ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Verses', { sourateNumber: item.number })}
    >
      <View style={styles.iconContainer}>
        <Image source={img} style={styles.imageParams} />
      </View>
      <View>
        <Text style={[styles.title]}>{item.number}. {item.englishName} . {item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Layout style={styles.container}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <FlatList
        data={sourates}
        renderItem={renderItem}
        keyExtractor={item => item.number.toString()}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageParams: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Vert clair pour le fond
  },
  item: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#1b5e20', // Vert foncé pour l'élément de la liste
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: '#388e3c', // Encore plus foncé pour l'icône de fond
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: '#fff', // Couleur blanche pour le texte
    marginRight: 15
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SouratesScreen;
