import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";
import { getSourates } from '../../services/quranService';
import Header from "../../components/Header.tsx";
import { Layout } from "@ui-kitten/components";
import GlobalStyles from '../../GlobalStyles';

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
      onPress={() => navigation.navigate('Verses', { sourateNumber: item.number })} >
      <View style={styles.iconContainer}>
        <Image source={img} style={styles.imageParams} />
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{item.number}</Text>
        </View>
      </View>
      <View>
        <Text style={[GlobalStyles.text, styles.title]}>{item.englishName} . {item.name.replace('سُورَة','')}</Text>
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
              isSetting={false} />
      <View style={styles.content}>
        <FlatList
          data={sourates}
          renderItem={renderItem}
          keyExtractor={item => item.number.toString()} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageParams: {
    width: 45,
    height: 45,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  item: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    backgroundColor: '#1b5e20',
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: '#388e3c',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginRight: 15
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginTop: 15,
  },
  counterText: {
    fontSize: 8,
    color: '#8de396',
    padding: 6,
    fontWeight: "bold",
    borderRadius: 5,
  },
});

export default SouratesScreen;
