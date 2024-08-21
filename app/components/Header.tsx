import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-ignore
const Header = ({ onPress, onSettingsPress, isHome, isSetting }) => {

  const image = require('../assets/home.png');
  const imageSetting = require('../assets/settings.png');
  const imageArrow = require('../assets/left-arrow.png');

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {!isHome ?
          <TouchableOpacity style={styles.iconParamsView} onPress={onPress}>
            <Image source={imageArrow} style={styles.imageParams} />
          </TouchableOpacity> :
          <View style={styles.iconParamsView}></View>
        }
        <View style={styles.iconParamsView}>
          <Image source={image} style={styles.image} />
        </View>
        {!isSetting ?
          <TouchableOpacity style={styles.iconParamsView} onPress={onSettingsPress}>
            <Image source={imageSetting} style={styles.imageParams} />
          </TouchableOpacity> : <View style={styles.iconParamsView}></View>}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    marginBottom: 10,
  },
  iconParamsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageParams: {
    width: 24,
    height: 24,
  },
  image: {
    width: 60,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;
