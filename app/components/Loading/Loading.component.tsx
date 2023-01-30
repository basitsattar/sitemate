import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading....</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
  },
});
