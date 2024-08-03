import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from "react-native";
import { getVerses } from '../../services/quranService';
import Header from "../../components/Header.tsx";
import { FontType } from "../../themes/Fonts";
import Separator from "../../components/Separator.tsx";

// @ts-ignore
const VersesScreen = ({ route, navigation }) => {
  const { sourateNumber, sourateName } = route.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const img = require('../../assets/frame.png');

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
  const renderItem = ({ item, index }) => (
    <View style={styles.CardStyle}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <Image source={img} style={styles.imageParams} />
          <View style={styles.counterContainer}>
            {/* changer item number */}
            <Text style={styles.counterText}>{index + 1}</Text>
          </View>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descTextRight}>
            {sourateNumber != 1 && index === 0 ? item.text.substring(40) : item.text}
          </Text>
        </View>
      </View>
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
      <View style={styles.title}>
          <Text style={styles.sourate}> {sourateName} </Text>
      </View>
      <View style={styles.content}>
        {/*si sourate number different de 1 mettre basmallah*/}
        <FlatList
          data={verses}
          renderItem={renderItem}
          keyExtractor={(item) => item.number.toString()}
          ItemSeparatorComponent={Separator}
          showsVerticalScrollIndicator={false}
        />
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
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardStyle: {
    height: 'auto',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  descContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  descTextRight: {
    textAlign: 'right',
    fontSize: 20,
    fontFamily: FontType.arabic,
    lineHeight: 50,
  },
  counterContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: 15,
  },
  counterText: {
    fontSize: 6,
    fontWeight: "bold",
  },
  imageParams: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b5e20'
  },
  sourate: {
    fontSize: 20,
    color: '#fff'
  }
});

export default VersesScreen;
