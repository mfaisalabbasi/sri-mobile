import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import Info from "../components/Info";
import { db } from "../components/config";

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

  const fetchData = async () => {
    const connection = db.ref("infographics");
    const loadedData = [];
    await connection.once("value", snapshot => {
      snapshot.forEach(child => {
        loadedData.push(child.val());
      });
    });
    setstate({
      info: loadedData.reverse(),
      loading: false
    });
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
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
    backgroundColor: "#B1B5B7"
  },
  icon: {
    paddingHorizontal: 8
  },
  parent: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Infographics;
