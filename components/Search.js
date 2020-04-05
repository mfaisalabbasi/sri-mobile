import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const Search = () => {
  return (
    <View style={styles.screen}>
      <TextInput
        title='Search'
        placeholder='Search Queries '
        placeholderTextColor='#44809D'
        style={{
          color: "#fff",
          width: "95%",
          padding: 5,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#00344D",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Search;
