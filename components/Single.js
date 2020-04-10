import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Single = (props) => {
  const { id } = props.route.params;
  return (
    <View style={styles.screen}>
      <View style={styles.down}>
        <Image
          source={{ uri: id }}
          style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B1B5B7",
  },
  down: {
    width: "97%",
    height: "97%",
  },
});
export default Single;
