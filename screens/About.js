import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

const About = props => {
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
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.admin}>
        <Text style={styles.title}>What We Do ?</Text>
      </View>
      <View style={styles.dev}>
        <Text style={styles.title}>Infographics Reports</Text>
      </View>
      <View style={styles.marketer}>
        <Text style={styles.title}>Reserach and Analytics Reports</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
  img: {
    width: '100%',
    height: '100%'
  },
  admin: {
    width: '85%',
    height: 150,
    backgroundColor: 'lightyellow',
    elevation: 5,
    borderRadius: 3
  },
  dev: {
    width: '85%',
    height: 150,
    backgroundColor: 'lightpink',
    elevation: 5,
    borderRadius: 3
  },
  marketer: {
    width: '85%',
    height: 150,
    backgroundColor: 'lightgreen',
    elevation: 5,
    borderRadius: 3
  }
});
export default About;
