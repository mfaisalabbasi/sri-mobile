import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Fonts } from "../src/utils/Fonts";

const All = (props) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <TouchableOpacity style={styles.container} onPress={props.navigate}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.dta.title}</Text>
          <Entypo style={styles.title} name='dots-three-horizontal' size={23} />
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: props.dta.imgUrl }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 3,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            width: "85%",
            borderBottomWidth: 0.3,
            borderBottomColor: "#00344D",
            marginLeft: 12,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "white",
    marginTop: 5,
    height: 120,
    borderRadius: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgContainer: {
    height: "60%",
    width: "20%",

    overflow: "hidden",
    borderRadius: 1,
  },
  titleContainer: {
    width: "78%",
    overflow: "hidden",
    height: "80%",
  },
  content: {
    padding: 2,
  },
  title: {
    paddingLeft: 15,
    fontWeight: "bold",
    marginRight: 5,
    color: "#00344D",
    fontFamily: Fonts.ebrima,
  },
});

export default All;
