import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import Info from '../components/Info';

const Infographics = props => {
  const [state, setstate] = useState({
    info: [],
    loading: true
  });
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

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        'https://stratic-research-institute.firebaseio.com/infographics.json'
      );
      const res = await req.json();
      const loadedData = [];
      Object.keys(res).map(item => {
        loadedData.push(res[item]);
      });
      setstate({
        info: loadedData,
        loading: false
      });
    };
    fetchData();
  }, []);
  const { info, loading } = state;

  return (
    <View style={styles.screen}>
      {loading ? (
        <View style={styles.parent}>
          <ActivityIndicator size='large' color='#44809D' />
        </View>
      ) : (
        <Carousel
          ref={c => {
            carousel = c;
          }}
          data={info}
          renderItem={itemData => <Info dta={itemData.item} />}
          sliderWidth={800}
          itemWidth={300}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264D64'
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
export default Infographics;