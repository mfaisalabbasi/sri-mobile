import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Detail = (props) => {
  const { id } = props.route.params;

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.imgScreen}>
          <Image source={{ uri: id.imgUrl }} style={styles.img} />
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            {id.title}
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={{ lineHeight: 25, color: "black" }}>
            {id.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scroll: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgScreen: {
    width: "100%",
    height: 300,
    marginTop: 2,
  },
  img: {
    borderRadius: 5,
    resizeMode: Platform.OS == "android" ? "stretch" : "contain",
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    padding: 5,
    backgroundColor: "white",
  },
  description: {
    width: "100%",
    padding: 10,
    marginTop: 3,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default Detail;
