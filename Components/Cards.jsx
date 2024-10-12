import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>${data.price.toFixed(2)}</Text>
      <Button style={{backgroundColor:'green'}} title="View Details" onPress={() => alert(`Details for ${data.title}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default Card;