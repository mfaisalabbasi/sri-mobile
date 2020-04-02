import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Info = ({ dta }) => {
  const { imgUrl } = dta;
  return (
    <View style={styles.screen}>
      <Image source={{ uri: imgUrl }} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#264D64",
    height: "90%",
    marginBottom: "auto",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center"
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: Platform.OS == "android" ? "stretch" : "contain"
  }
});
export default Info;
