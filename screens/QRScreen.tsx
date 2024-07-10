import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';
import Footer from "../components/Footer.tsx";

// @ts-ignore
const QRScreen = ({navigation}) => {

  return (
    <Layout style={{flex: 1}}>

      <Footer onPress={() => navigation.navigate('Accueil')} />
    </Layout>
  );
};

export default QRScreen;
