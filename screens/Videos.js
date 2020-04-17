import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VidGrid from "../components/VidGrid";
import { db } from "../components/config";

const Videos = (props) => {
  const [search, setsearch] = useState(false);
  const [state, setstate] = useState({
    broadcast: [],
    loading: true,
  });
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.toLowerCase());
    const newData = filterData.filter((item) => {
      const titleData = item.title.toLowerCase();
      return titleData.includes(query);
    });
    setstate({
      broadcast: newData,
    });
  };

  //search bar function
  const Search = () => {
    return (
      <View style={styles.inputScreen}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => setsearch(false)}
        >
          <Ionicons name='md-arrow-back' size={25} color='#fff' />
        </TouchableOpacity>
        <View style={styles.input}>
          <TextInput
            title='Search'
            placeholder='Search Queries '
            placeholderTextColor='#44809D'
            onChangeText={handleSearch}
            style={{
              color: "#fff",
              width: "95%",
              padding: 5,
            }}
          />
        </View>
      </View>
    );
  };
  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={styles.icon}>
          <Ionicons
            name='ios-menu'
            color='white'
            size={32}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      );
    },
    headerRight: !search
      ? () => {
          return (
            <View style={{ ...styles.icon, marginRight: 3 }}>
              <Ionicons
                name='ios-search'
                color='white'
                size={26}
                onPress={() => setsearch(true)}
              />
            </View>
          );
        }
      : Search,
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
    setFilterData(loadedArr);
  };
  useEffect(() => {
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
        <View>
          {broadcast.length === 0 ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Text style={{ color: "#44809D", fontSize: 18 }}>
                Content not found !!!
              </Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={(item, index) => "key" + index}
              data={broadcast}
              renderItem={(itemData) => <VidGrid dta={itemData.item} />}
            />
          )}
        </View>
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
  inputScreen: {
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#00344D",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backbtn: {
    width: "10%",

    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "85%",
  },
});
export default Videos;
