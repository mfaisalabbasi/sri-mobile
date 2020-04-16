import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const Infocat = ({ dta, navigate }) => {
  const { imgUrl } = dta;
  return (
    <TouchableOpacity style={styles.box} activeOpacity={0.9} onPress={navigate}>
      <Image source={{ uri: imgUrl }} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "47%",
    height: 145,
    backgroundColor: "#BFC4C1",
    margin: 5,
    marginTop: 10,
    borderRadius: 3,
    padding: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: Platform.OS == "android" ? "stretch" : "contain",
  },
});

export default Infocat;
