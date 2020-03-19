import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Text
} from 'react-native';
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
    broadcast: []
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
        broadcast: loadedArr
      });
    };
    fetchData();
  }, []);
  const { broadcast } = state;
  return (
    <View style={styles.screen}>
      <FlatList
        data={broadcast}
        renderItem={itemData => <VidGrid dta={itemData.item} />}
      />
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

  grid: {
    backgroundColor: 'white',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    elevation: 3,
    marginTop: 5
  },
  gridflex: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridSection: {
    width: '47%',
    backgroundColor: 'pink',
    height: 150,
    margin: 3,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
export default Videos;

{
  /* <ScrollView style={styles.grid}>
        <View style={styles.gridflex}>
          <FlatList
          data={broadcast}
          renderItem={itemData => (
            <VidGrid
              dta={itemData.item}
              navigate={() => props.navigation.navigate('vidDetails')}
            />
          )}
        /> 
          <VidGrid navigate={() => props.navigation.navigate('vidDetails')} />
          
        </View>
      </ScrollView> */
}
