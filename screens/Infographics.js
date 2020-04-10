import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import Info from "../components/Info";

const Infographics = (props) => {
  const [state, setstate] = useState({
    info: [],
    loading: true,
  });
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
    headerRight: () => {
      return (
        <View style={{ ...styles.icon, marginRight: 3 }}>
          <Ionicons
            name='md-images'
            color='white'
            size={28}
            onPress={() => props.navigation.navigate("categories")}
          />
        </View>
      );
    },
  });

  const fetchData = async () => {
    const req = await fetch(
      'https://stratic-research-institute.firebaseio.com/infographics.json?orderBy="$key"&limitToLast=10'
    );
    const res = await req.json();
    const vl = Object.keys(res);
    const loadedData = [];
    vl.map((item) => loadedData.push(res[item]));

    setstate({
      info: loadedData.reverse(),
      loading: false,
    });
  };
  useEffect(() => {
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
          ref={(c) => {
            carousel = c;
          }}
          data={info}
          renderItem={(itemData) => (
            <Info
              dta={itemData.item}
              navigate={() =>
                props.navigation.navigate("single", {
                  id: itemData.item.imgUrl,
                })
              }
            />
          )}
          sliderWidth={800}
          itemWidth={300}
          autoplay
          loop
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          autoplayInterval={5000}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B1B5B7",
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
export default Infographics;
