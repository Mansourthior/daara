import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import Footer from "../components/Footer.tsx";

// @ts-ignore
const FiqhScreen = ({navigation}) => {

  return (
    <Layout style={{flex: 1}}>
      <Footer onPress={() => navigation.navigate('Accueil')} />
    </Layout>
  );
};

export default FiqhScreen;
