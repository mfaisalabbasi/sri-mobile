import React, { useEffect, useState, useCallback } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
  AsyncStorage
} from "react-native";
import All from "../components/All";
import { db } from "../components/config.js";

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

  const fetchData = async () => {
    const connection = db.ref("articles");
    const loaded = [];
    await connection.once("value", snapshot => {
      snapshot.forEach(child => {
        loaded.push(child.val());
      });
    });

    setposts({
      arData: loaded.reverse(),
      loading: false
    });
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
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
            keyExtractor={(item, index) => "key" + index}
            data={arData}
            renderItem={itemData => (
              <All
                navigate={() =>
                  props.navigation.navigate("details", { id: itemData.item })
                }
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
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    paddingHorizontal: 8
  }
});

export default Home;
