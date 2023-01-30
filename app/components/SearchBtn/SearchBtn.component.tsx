import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors';
import {Images} from '../../constants/images';

type Props = {
  onPress: () => void;
};
const SearchBtn = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Image source={Images.searchIcon} style={styles.btnImage} />
    </TouchableOpacity>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImage: {width: 20, height: 20},
});
