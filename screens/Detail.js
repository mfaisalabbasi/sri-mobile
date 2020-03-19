import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import salad1 from '../img/salad.jpg';
const Detail = props => {
  const [state, setstate] = useState({
    data: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        `https://stratic-research-institute.firebaseio.com/articles/.json`
      );
      const res = await req.json();
    };
    fetchData();
  }, []);
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.imgScreen}>
          <Image source={salad1} style={styles.img} />
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Building JavaScript bundle: finished in 454ms
          </Text>
        </View>
        <View style={styles.description}>
          <Text>
            Find that perfect color with our color picker and discover beautiful
            color harmonies, tints, shades and tones; input Hex color codes, RGB
            and HSL values, and generate HTML, CSS and SCSS styles. tints,
            shades and tones; input Hex color codes, RGB and HSL values, and
            generate HTML, CSS and SCSS stylestints, shades and tones; input Hex
            color codes, RGB and HSL values, and generate HTML, CSS and SCSS
            styles tints, shades and tones; input Hex color codes, RGB and HSL
            values, and generate HTML, CSS and SCSS stylestints, shades and
            tones; input Hex color codes, RGB and HSL values, and generate HTML,
            CSS and SCSS styles
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  scroll: {
    width: '98%',

    marginLeft: 'auto',
    marginRight: 'auto'
  },
  imgScreen: {
    width: '100%',
    height: 250,
    padding: 5
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden'
  },
  title: {
    width: '100%',

    padding: 5
  },
  description: {
    width: '100%',

    padding: 5
  }
});
export default Detail;
