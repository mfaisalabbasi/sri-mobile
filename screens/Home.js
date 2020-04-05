import React, { useEffect, useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import All from "../components/All";
import Search from "../components/Search";

const Home = (props) => {
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
  const [posts, setposts] = useState({
    arData: [],
    loading: true,
  });

  const fetchData = async () => {
    const req = await fetch(
      "https://stratic-research-institute.firebaseio.com/articles.json"
    );
    const loaded = [];
    const res = await req.json();
    const vl = Object.keys(res);
    vl.map((item) => loaded.push(res[item]));

    setposts({
      arData: loaded.reverse(),
      loading: false,
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
            renderItem={(itemData) => (
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
    flex: 1,
  },
  parent: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    paddingHorizontal: 8,
  },
});

export default Home;
