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

import * as firebase from 'firebase';

//firebase configurations
const firebaseConfig = {
  apiKey: 'AIzaSyDxsuzYOYOUcZ9adUutf260C-1bo9Z4f8E',
  authDomain: 'stratic-research-institute.firebaseapp.com',
  databaseURL: 'https://stratic-research-institute.firebaseio.com',
  projectId: 'stratic-research-institute',
  storageBucket: 'stratic-research-institute.appspot.com',
  messagingSenderId: '681190964874',
  appId: '1:681190964874:web:17b6f2da1218577bf4f773',
  measurementId: 'G-ERTN8NM4KZ'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

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
    const connection = database.ref('articles/');
    const loaded = [];
    connection.on('child_added', item => loaded.push(item.val()));

    setposts({
      arData: loaded,
      loading: false
    });
  }, []);
  const { arData, loading } = posts;
  console.log('This is arData', arData);
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

// const fetchData = async () => {
//   const req = await fetch(
//     'https://stratic-research-institute.firebaseio.com/articles.json'
//   );
//   const res = await req.json();
//   const loadedData = [];
//   Object.keys(res).map(item => {
//     loadedData.push(res[item]);
//   });
//   setposts({
//     arData: loadedData,
//     loading: false
//   });
// };
// fetchData();
