import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchNewsScreen from './app/screens/SearchNews.screen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchNewsScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
