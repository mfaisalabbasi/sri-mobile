import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import salad1 from "../img/salad3.jpg";
import { db } from "../components/config";
const Detail = props => {
  const [state, setstate] = useState({
    data: {}
  });

  const { id } = props.route.params;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const connection = await db.ref("articles").child(id);
  //     console.log(connection);
  //   };

  //   fetchData();
  // }, []);
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.imgScreen}>
          <Image source={{ uri: id.imgUrl }} style={styles.img} />
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{id.title}</Text>
        </View>
        <View style={styles.description}>
          <Text>{id.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  scroll: {
    width: "98%",

    marginLeft: "auto",
    marginRight: "auto"
  },
  imgScreen: {
    width: "100%",
    height: 250,
    padding: 5
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    overflow: "hidden"
  },
  title: {
    width: "100%",

    padding: 5
  },
  description: {
    width: "100%",

    padding: 5
  }
});
export default Detail;
