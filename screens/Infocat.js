import React from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
const Infocat = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("health")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("education")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("defence")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>Defence</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("nuclear")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>
          Nuclear Technology
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("military")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>Military</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => props.navigation.navigate("economy")}
      >
        <Text style={{ fontSize: 16, fontWeight: "100" }}>Economy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    backgroundColor: "lightblue",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
export default Infocat;
