import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import info1 from '../img/info1.jpg';
const Info = ({ dta }) => {
  const { infoUrl, title } = dta;
  return (
    <View style={styles.screen}>
      <Image source={{ uri: infoUrl }} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#264D64',
    height: '90%',
    marginBottom: 'auto',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: { width: '100%', height: '100%' }
});
export default Info;
