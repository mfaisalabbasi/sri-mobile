import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import All from "../components/All";

// states ---------------------
const Home = (props) => {
  const [search, setsearch] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [posts, setposts] = useState({
    arData: [],
    loading: true,
  });

  // Search Component ----------------

  const Search = () => {
    return (
      <View style={styles.inputScreen}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => {
            setsearch(false);
          }}
        >
          <Ionicons name='md-arrow-back' size={25} color='#fff' />
        </TouchableOpacity>
        <View style={styles.input}>
          <TextInput
            title='Search'
            placeholder='Search Queries '
            placeholderTextColor='#44809D'
            onChangeText={(event) => searchHandle(event)}
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
  const { arData, loading } = posts;

  //------------------Header options

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

  // Fetching Data and updating states
  const fetchData = async () => {
    const req = await fetch(
      "https://stratic-research-institute.firebaseio.com/articles.json"
    );
    let loaded = [];
    const res = await req.json();
    const vl = Object.keys(res);
    vl.map((item) => loaded.push(res[item]));
    setposts({
      arData: loaded.reverse(),
      loading: false,
    });
    setFilterData(loaded);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //-------------Handle search component

  const searchHandle = (event) => {
    setFilter(event.toLowerCase());
    const newData = filterData.filter((item) => {
      return item.title.toLowerCase().includes(filter);
    });

    setposts({
      arData: newData,
    });
  };
  //Rendering component
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
                  props.navigation.navigate("details", {
                    id: itemData.item,
                  })
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

export default Home;
