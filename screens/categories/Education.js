import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import Infocat from "../../components/Infocat";

const Education = (props) => {
  const [state, setstate] = useState({
    info: [],
    loading: true,
  });

  const fetchData = async () => {
    const req = await fetch(
      "https://stratic-research-institute.firebaseio.com/infographics.json"
    );
    const res = await req.json();
    const vl = Object.keys(res);
    const loadedData = [];
    vl.map((item) => loadedData.push(res[item]));
    const filter = loadedData.filter((item) => {
      return item.cat === "education";
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
        <View style={styles.flat}>
          <FlatList
            numColumns={2}
            keyExtractor={(item, index) => "key" + index}
            data={info}
            renderItem={(itemData) => (
              <Infocat
                dta={itemData.item}
                navigate={() =>
                  props.navigation.navigate("single", {
                    id: itemData.item.imgUrl,
                  })
                }
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  flat: {
    width: "90%",
    height: "95%",
  },
});
export default Education;
