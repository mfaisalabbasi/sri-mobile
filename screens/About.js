import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

const About = (props) => {
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
    },
  });
  return (
    <View style={styles.scrn}>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>What We Do ?</Text>
          <Text style={styles.content}>
            Strategic Research Institute (SRI) is a non-partisan, non-political
            and non-governmental research organization based in Islamabad. The
            SRI aspires to share facts and knowledge about security, counter-
            terrorism, strategic and social issues, and the ongoing conflicts in
            the region through the medium of infographics, short videos, and
            research reports. We, at SRI, strive to create a better
            understanding of the knowledge required for policy making through
            undertaking independent, impartial and objective research and
            transmitting it to the audience in a manner that would be easier to
            comprehend.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.content}>
            SRI focuses on security challenges faced by Pakistan in the form of
            both traditional and non–traditional threats.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Research</Text>
          <Text style={styles.content}>
            Our team aims at producing data from the valid and authentic sources
            and provides a full fledge research on diverse topics.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Influence</Text>
          <Text style={styles.content}>
            SRI with its presence on social media influences a huge audience
            including students and policy makers based in Pakistan as well as
            internationally.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrn: {
    flex: 1,
    backgroundColor: "#E1EDF3",
  },
  screen: {
    marginTop: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 8,
  },

  container: {
    width: "95%",
    borderRadius: 3,
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#DAF1FE",
    color: "#00344D",
    padding: 5,
  },
  content: {
    padding: 7,
  },
});
export default About;
