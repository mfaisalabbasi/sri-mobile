import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import VidGrid from '../components/VidGrid';

const Videos = props => {
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

  const [state, setstate] = useState({
    broadcast: [],
    loading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        'https://stratic-research-institute.firebaseio.com/videos.json'
      );
      const res = await req.json();
      const loadedArr = [];
      Object.keys(res).map(val => {
        loadedArr.push(res[val]);
      });
      setstate({
        broadcast: loadedArr,
        loading: false
      });
    };
    fetchData();
  }, []);
  const { broadcast, loading } = state;
  return (
    <View style={styles.screen}>
      {loading ? (
        <View style={styles.parent}>
          <ActivityIndicator size='large' color='#00344D' />
        </View>
      ) : (
        <FlatList
          data={broadcast}
          renderItem={itemData => <VidGrid dta={itemData.item} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F0ED',
    height: 100
  },
  icon: {
    paddingHorizontal: 8
  },

  parent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Videos;
