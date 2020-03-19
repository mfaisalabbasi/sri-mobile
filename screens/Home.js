import React, { useEffect, useState } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text
} from 'react-native';
import All from '../components/All';

const Home = props => {
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
  const [posts, setposts] = useState({
    arData: [],
    loading: true
  });
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        'https://stratic-research-institute.firebaseio.com/articles.json'
      );
      const res = await req.json();
      const loadedData = [];
      Object.keys(res).map(item => {
        loadedData.push(res[item]);
      });
      setposts({
        arData: loadedData,
        loading: false
      });
    };
    fetchData();
  }, []);
  const { arData, loading } = posts;

  return (
    <View style={styles.screen}>
      {loading ? (
        <View style={styles.parent}>
          <ActivityIndicator size='large' color='#00344D' />
        </View>
      ) : (
        <View style={styles.screen}>
          <FlatList
            data={arData}
            renderItem={itemData => (
              <All
                key={itemData.index}
                navigate={() => props.navigation.navigate('details')}
                dta={itemData.item}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  parent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    paddingHorizontal: 8
  }
});

export default Home;
