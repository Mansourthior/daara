import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";
import Header from "../../components/Header.tsx";
import { Layout } from "@ui-kitten/components";
import GlobalStyles from '../../../GlobalStyles';
import { useDispatch, useSelector } from "react-redux";
import { fetchSourates } from "../../redux/actions";

// @ts-ignore
const SouratesScreen = ({ navigation }) => {

  const img = require('../../assets/frame.png');

  const dispatch = useDispatch();
  // @ts-ignore
  const sourates = useSelector((state) => state.sourates.sourates);
  // @ts-ignore
  const loading = useSelector((state) => state.sourates.loading);
  // @ts-ignore
  const error = useSelector((state) => state.sourates.error);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchSourates());
  }, [dispatch]);

  // @ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Verses', { sourateNumber: item.number, sourateName : item.name })} >
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
        <ActivityIndicator size="large" color="#1b5e20" />
      </View>
    );
  }

  if(error) {
    // TODO : faire un view pour le error
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
          keyExtractor={item => item.number.toString()}
          showsVerticalScrollIndicator={false} />
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
    marginVertical: 5,
    borderRadius: 15,
    borderRightWidth: 3,
    borderBottomWidth: 1,
    borderLeftColor: '#34633b',
    backgroundColor: '#73dd75',
  },
  iconContainer: {
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
    color: '#000',
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
    padding: 6,
    fontWeight: "bold",
    borderRadius: 5,
  },
});

export default SouratesScreen;
