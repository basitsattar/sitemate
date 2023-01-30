import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import History from '../components/History/History.component';
import Loading from '../components/Loading/Loading.component';
import NewsList from '../components/NewsList/NewsList.component';
import SearchBtn from '../components/SearchBtn/SearchBtn.component';
import SearchInput from '../components/SearchInput/SearchInput.component';
import {Colors} from '../constants/colors';
import {API_KEY, API_URL} from '../constants/env';

const SearchNewsScreen = () => {
  const [search, setSearch] = useState('Apple');
  const [showHistory, setShowHistory] = useState(true);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [news, setNews] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const searchNews = async () => {
    setSearchHistory(prevState => {
      if (!prevState.includes(search)) {
        return [...prevState, search];
      }
      return prevState;
    });

    if (searchHistory.length > 5) {
      searchHistory.shift();
    }

    await AsyncStorage.setItem(
      '@search_history',
      JSON.stringify(searchHistory),
    );
    setShowHistory(false);
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

  const getSearchHistory = async () => {
    try {
      const value = await AsyncStorage.getItem('@search_history');
      if (value !== null) {
        setSearchHistory(JSON.parse(value));
      }
    } catch (e) {}
  };

  useEffect(() => {
    getSearchHistory();
    searchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {showHistory && (
          <History
            searchHistory={searchHistory}
            setSearch={setSearch}
            searchNews={searchNews}
          />
        )}
        <View style={styles.header}>
          <SearchInput
            value={search}
            onChangeText={text => setSearch(text)}
            searchNews={searchNews}
            setShowHistory={setShowHistory}
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
    position: 'relative',
  },
  header: {flexDirection: 'row', marginTop: 20},
});
