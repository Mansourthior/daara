import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import Header from "../components/Header.tsx";
import { StyleSheet } from "react-native";

// @ts-ignore
const FiqhScreen = ({navigation}) => {

  return (
    <Layout style={styles.container}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
      <List  data={null} renderItem={null}/>
    </Layout>
  );
};

export default FiqhScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
