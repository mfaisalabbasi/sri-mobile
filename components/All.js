import React, { Fragment } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const All = (props) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.container} onPress={props.navigate}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: props.dta.imgUrl }}
            style={{ width: "100%", height: "100%", borderRadius: 3 }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.dta.title}</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "white",
    marginTop: 5,
    height: 150,
    elevation: 3,
    borderRadius: 3,
    flexDirection: "row",
  },
  imgContainer: {
    height: "90%",
    width: "35%",
    padding: 5,
    overflow: "hidden",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 3,
  },
  titleContainer: {
    width: "65%",
    overflow: "hidden",
    height: "90%",
    marginBottom: "auto",
    marginTop: "auto",
  },
  content: {
    padding: 2,
  },
  title: {
    fontSize: 16,
    paddingLeft: 15,
    fontWeight: "bold",
    marginRight: 5,
    color: "black",
  },
});

export default All;
