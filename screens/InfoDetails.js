import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const InfoDetails = () => {
  return (
    <View style={styles.screen}>
      <Text>Infographic Details</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default InfoDetails;
