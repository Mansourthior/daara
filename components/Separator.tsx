import React from 'react';
import { StyleSheet, View } from "react-native";
import { Colors } from "../themes/Colors";

const Separator = () => {
  return <View style={styles.line} />;
};


const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: Colors.statusbarModal
  },
});

export default Separator;
