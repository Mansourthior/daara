import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// @ts-ignore
const Card = ({ title, onPress, image }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 30,
    backgroundColor: '#197000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // for Android
    shadowColor: '#65dc3f', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowRadius: 10, // for iOS
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
  },
});

export default Card;
