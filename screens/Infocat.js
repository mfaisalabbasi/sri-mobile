import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from "react-native";
import { Fonts } from "../src/utils/Fonts";
const Infocat = (props) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("health")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/health.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Health
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("education")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/education.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Education
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("defence")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/defence.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Defence
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("nuclear")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/nuclear.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Nuclear
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("military")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/military.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Military
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => props.navigation.navigate("economy")}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/economy.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: Fonts.ebrima,
                fontSize: 16,
                color: "#00344D",
              }}
            >
              Economy
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "44%",
    height: 150,
    margin: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "75%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
});
export default Infocat;
