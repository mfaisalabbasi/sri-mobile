import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Fonts } from "../src/utils/Fonts";

const About = (props) => {
  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={{ marginLeft: 7 }}>
          <Ionicons
            name='ios-menu'
            color='white'
            size={32}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      );
    },
  });
  return (
    <ScrollView style={styles.scrn}>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require("../assets/about.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.content}>
          <Text style={{ lineHeight: 20, fontFamily: Fonts.ebrima }}>
            <Text style={{ fontWeight: "bold", fontFamily: Fonts.ebrima }}>
              Strategic{"  "} Research{"  "} Institute{"  "} (SRI)
            </Text>
            {"  "}
            is non-partisan, non-political and non-governmental reasearch
            orgnization based in islamabad. The SRI endeavors to create better
            understanding about security , counter terrorism, Strategic and
            social issues, and ongoing conflicts in the region among the
            conserned stackholder through undertaking independent, impartial and
            objective research and analysis. The SRI aspires to create awareness
            among all segments of the pakistani society and government to
            jointly strive for peaceful, tolerant and progressive Pakistan with
            the help of short videos and documenttaries.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrn: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: "99%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  img: {
    width: "100%",
    height: 200,
  },
  content: {
    width: "100%",

    padding: 10,
  },
});
export default About;
