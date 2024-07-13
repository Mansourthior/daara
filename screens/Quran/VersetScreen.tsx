import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getVerses } from '../../services/quranService';
import Header from "../../components/Header.tsx";

// @ts-ignore
const VersesScreen = ({ route, navigation }) => {
  const { sourateNumber } = route.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const data = await getVerses(sourateNumber);
        setVerses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVerses();
  }, [sourateNumber]);

  // @ts-ignore
  const renderItem = ({ item }) => (
    <View style={styles.verseContainer}>
      <Text style={styles.verseText}>{item.text}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Quran')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <View style={styles.content}>
        <FlatList
          data={verses}
          renderItem={renderItem}
          keyExtractor={(item) => item.number.toString()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  verseContainer: {
    flexDirection: 'row-reverse',
    marginBottom: 15,
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verseText: {
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VersesScreen;
