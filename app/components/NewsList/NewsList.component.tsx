import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NewsItem, {News} from '../NewsItem/NewsItem.component';

type Props = {
  news: News[];
};

const NewsList = ({news}: Props) => {
  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      data={news}
      renderItem={({item}) => <NewsItem news={item} />}
      keyExtractor={item => item.title}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {flexGrow: 1, paddingTop: 10},
});
