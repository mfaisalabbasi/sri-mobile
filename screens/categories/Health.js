import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Carousel from "react-native-snap-carousel";
import Info from "../../components/Info";

const Health = (props) => {
  const [state, setstate] = useState({
    info: [],
    loading: true,
  });

  const fetchData = async (props) => {
    const req = await fetch(
      "https://stratic-research-institute.firebaseio.com/infographics.json"
    );
    const res = await req.json();
    const vl = Object.keys(res);
    const loadedData = [];
    vl.map((item) => loadedData.push(res[item]));
    const filter = loadedData.filter((item) => {
      return item.cat === "health";
    });
    setstate({
      info: filter.reverse(),
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
export default Health;
