import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

// @ts-ignore
const Header = ({ onPress, onSettingsPress, isHome, isSetting }) => {

  const image = require('../assets/home.png');
  const imageSetting = require('../assets/settings.png');
  const imageArrow = require('../assets/left-arrow.png');

  return (
    <View style={styles.header}>
      {!isHome ?
        <TouchableOpacity onPress={onPress}>
          <Image source={imageArrow} style={styles.imageParams} />
        </TouchableOpacity> :
        <View></View>
      }
      <View>
        <Image source={image} style={styles.image} />
      </View>
      {!isSetting ?
        <TouchableOpacity onPress={onSettingsPress}>
          <Image source={imageSetting} style={styles.imageParams} />
        </TouchableOpacity> : <View></View>}

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 50,
    padding: 10,
    backgroundColor: '#daf6cf',
    borderBottomWidth: 1,
    borderBottomColor: '#ed8f68',
    paddingHorizontal: 16,
  },
  imageParams: {
    width: 20,
    height: 20,
    marginBottom: 0,
  },
  image: {
    width: 65,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;
