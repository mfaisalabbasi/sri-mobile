import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import VidGrid from "../components/VidGrid";
import { db } from "../components/config";
import Search from "../components/Search";

const Videos = (props) => {
  const [search, setsearch] = useState(false);
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
    },
    headerRight: !search
      ? () => {
          return (
            <View style={{ ...styles.icon, marginRight: 3 }}>
              <FontAwesome
                name='search'
                color='white'
                size={23}
                onPress={() => setsearch(true)}
              />
            </View>
          );
        }
      : Search,
  });

  const [state, setstate] = useState({
    broadcast: [],
    loading: true,
  });

  const fetchData = async () => {
    const connection = db.ref("videos/");
    const loadedArr = [];
    await connection.once("value", (snapshot) => {
      snapshot.forEach((child) => {
        loadedArr.push(child.val());
      });
    });
    setstate({
      broadcast: loadedArr.reverse(),
      loading: false,
    });
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { broadcast, loading } = state;
  return (
    <View style={styles.screen}>
      {loading ? (
        <View style={styles.parent}>
          <ActivityIndicator size='large' color='#00344D' />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => "key" + index}
          data={broadcast}
          renderItem={(itemData) => <VidGrid dta={itemData.item} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F0F0ED",
    height: 100,
  },
  icon: {
    paddingHorizontal: 8,
  },

  parent: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Videos;
