import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import salad from '../img/salad.jpg';

const VidDetails = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <Image source={salad} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Starting Metro Bundler on port Starting Metro Bundler on port
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  display: {
    width: '98%',
    height: '60%',

    marginTop: 5,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5
  },
  title: {
    width: '97%',
    height: 50,
    padding: 5,
    marginVertical: 5
  },
  titleText: { fontSize: 18, fontWeight: 'bold' }
});
export default VidDetails;
