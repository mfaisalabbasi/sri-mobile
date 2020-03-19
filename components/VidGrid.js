import React, { Fragment } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import salad from '../img/salad.jpg';
const VidGrid = props => {
  const { vidUrl, title } = props.dta;

  return (
    <View style={styles.card}>
      <View style={styles.vid}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            html: vidUrl
          }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.heading}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '97%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 300,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3
  },
  vid: {
    width: '100%',
    height: '80%'
  },
  title: {
    width: '100%',
    height: '20%'
  },
  heading: {
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default VidGrid;
