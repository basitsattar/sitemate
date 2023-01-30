import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../constants/colors';

type Props = {
  searchHistory: string[];
  setSearch: (searchHistory: string) => void;
  searchNews: () => void;
};

const History = ({searchHistory, setSearch, searchNews}: Props) => {
  return searchHistory.length ? (
    <View style={styles.container}>
      {searchHistory
        .slice(0)
        .reverse()
        .map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSearch(item);
                searchNews();
              }}
              key={item}
              style={styles.searchConatiner}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  ) : null;
};

export default History;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    position: 'absolute',
    top: 60,
    zIndex: 99,
    width: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkGray,
  },
  searchConatiner: {
    height: 40,
    alignContent: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopColor: Colors.darkGray,
    borderTopWidth: 1,
  },
  text: {
    color: Colors.black,
  },
});
