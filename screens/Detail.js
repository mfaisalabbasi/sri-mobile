import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Detail = props => {
  const { id } = props.route.params;

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
