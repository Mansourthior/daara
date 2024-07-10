import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

// @ts-ignore
const Footer = ({ onPress }) => {

  const image = require('../assets/home.png');

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
