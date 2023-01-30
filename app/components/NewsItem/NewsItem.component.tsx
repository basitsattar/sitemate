import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';

export type News = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Props = {
  news: News;
};

const NewsItem = ({news}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: news.urlToImage
            ? news.urlToImage
            : 'https://placeholder.com/assets/images/150x150-2-500x500.png',
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>
        {news.description.split(' ').slice(0, 20).join(' ').concat('...')}
      </Text>
      <View style={styles.footer}>
        {news.source.name ? (
          <Text style={styles.date}>
            Source:
            <Text style={styles.author}>{news.source.name}</Text>
          </Text>
        ) : null}

        <Text style={styles.date}>
          {new Date(news.publishedAt).toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {width: '100%', height: 200, borderRadius: 10},
  title: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  author: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  date: {
    color: Colors.black,
    textAlign: 'right',
    marginTop: 10,
  },
  description: {
    color: Colors.black,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
