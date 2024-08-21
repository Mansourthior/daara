import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from "react-native";
import Header from "../../components/Header.tsx";
import { FontType } from "../../themes/Fonts";
import Separator from "../../components/Separator.tsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerses } from "../../redux/actions";
import { Layout } from "@ui-kitten/components";

// @ts-ignore
const VersesScreen = ({ route, navigation }) => {
  const { sourateNumber, sourateName } = route.params;
  const img = require('../../assets/frame.png');

  const dispatch = useDispatch();
  // @ts-ignore
  const verses = useSelector((state) => state.verses.verses);
  // @ts-ignore
  const loading = useSelector((state) => state.verses.loading);
  // @ts-ignore
  const error = useSelector((state) => state.verses.error);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchVerses(sourateNumber));
  }, [dispatch]);

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
        <ActivityIndicator size="large" color="#1b5e20" />
      </View>
    );
  }

  if(error) {
    // TODO : faire un view pour le error
  }

  return (
    <Layout style={styles.container}>
      <Header onPress={() => navigation.navigate('Quran')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>

      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.sourate}> {sourateName} </Text>
        </View>
        {/*si sourate number different de 1 mettre basmallah*/}
        <FlatList
          data={verses}
          renderItem={renderItem}
          keyExtractor={(item) => item.number.toString()}
          ItemSeparatorComponent={Separator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 5,
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
  },
  sourate: {
    fontSize: 18,
    color: '#1b5e20',
    fontWeight: 'bold'
  }
});

export default VersesScreen;
