import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import Loading from '../components/Loading/Loading.component';
import NewsList from '../components/NewsList/NewsList.component';
import SearchBtn from '../components/SearchBtn/SearchBtn.component';
import SearchInput from '../components/SearchInput/SearchInput.component';
import {Colors} from '../constants/colors';
import {API_KEY, API_URL} from '../constants/env';

const SearchNewsScreen = () => {
  const [search, setSearch] = useState('Apple');
  const [news, setNews] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const searchNews = () => {
    Keyboard.dismiss();
    axios
      .get(
        API_URL +
          '/everything?q=' +
          search +
          '&from=2023-01-30&sortBy=popularity&apiKey=' +
          API_KEY,
      )
      .then(response => {
        if (response.data.articles.length) {
          setError(null);
          setNews(response.data.articles);
        } else {
          setError('No news found');
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    searchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <SearchInput
            value={search}
            onChangeText={text => setSearch(text)}
            searchNews={searchNews}
          />
          <SearchBtn onPress={searchNews} />
        </View>
        {error && <Text>{error}</Text>}
        {news.length ? <NewsList news={news} /> : <Loading />}
      </View>
    </View>
  );
};

export default SearchNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    width: '90%',
    backgroundColor: Colors.white,
  },
  header: {flexDirection: 'row', marginTop: 20},
});
