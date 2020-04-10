import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const Info = ({ dta, navigate }) => {
  const { imgUrl } = dta;
  return (
    <TouchableOpacity
      style={styles.screen}
      activeOpacity={0.9}
      onPress={navigate}
    >
      <Image source={{ uri: imgUrl }} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#264D64",
    height: "90%",
    marginBottom: "auto",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: Platform.OS == "android" ? "stretch" : "contain",
  },
});
export default Info;
