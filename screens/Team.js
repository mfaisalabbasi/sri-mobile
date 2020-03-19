import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {} from 'react-native-gesture-handler';

const Team = props => {
  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={styles.icon}>
          <Ionicons
            name='md-menu'
            color='white'
            size={30}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      );
    }
  });
  return (
    <ScrollView contentContainerStyle={styles.wraper}>
      <View style={styles.screen}>
        <View style={styles.admin}>
          <Text style={styles.title}>Adminstration</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.title}>Developer & Designer</Text>
        </View>
        <View style={styles.marketer}>
          <Text style={styles.title}>Marketing Officer</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wraper: {
    width: '100%',
    height: '100%'
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  admin: {
    width: '85%',
    height: 120,
    backgroundColor: 'lightyellow',
    elevation: 5,
    borderRadius: 3
  },
  dev: {
    width: '85%',
    height: 120,
    backgroundColor: 'lightpink',
    elevation: 5,
    borderRadius: 3
  },
  marketer: {
    width: '85%',
    height: 120,
    backgroundColor: 'lightgreen',
    elevation: 5,
    borderRadius: 3
  }
});
export default Team;
