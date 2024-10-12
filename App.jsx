import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Cards from './Components/Cards';
import data from './Components/data';

const App = () => {
  const renderItem = ({ item }) => (
    <Cards data={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;