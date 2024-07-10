import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import Header from "../components/Header.tsx";

// @ts-ignore
const SoufismeScreen = ({navigation}) => {

  return (
    <Layout style={{flex: 1}}>
      <Header onPress={() => navigation.navigate('Accueil')}
              onSettingsPress={() => navigation.navigate('Settings')}
              isHome={false}
              isSetting={false}/>
    </Layout>
  );
};

export default SoufismeScreen;
