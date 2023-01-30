import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../constants/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  searchNews: () => void;
};

const SearchInput = ({value, onChangeText, searchNews}: Props) => {
  const handleKeyDown = (e: any) => {
    console.log('HERE', e.nativeEvent.key);
    if (e.nativeEvent.key === 'Enter') {
      // searchNews();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.placeholder}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        onKeyPress={handleKeyDown}
        onSubmitEditing={searchNews}
        keyboardType="default"
        returnKeyType="search"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    color: Colors.black,
    backgroundColor: Colors.gray,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.darkGray,
  },
});
