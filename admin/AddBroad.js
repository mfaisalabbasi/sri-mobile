import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { db } from "../components/config";
const AddBroad = props => {
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
    }
  });

  const [title, settitle] = useState("");
  const [vidUrl, setvidUrl] = useState("");

  const onPress = async () => {
    if (title.length === 0) {
      return Alert.alert(
        "Submission Failed",
        "Enter broad title Before submission"
      );
    }
    if (vidUrl.length === 0) {
      return Alert.alert(
        "Submission Failed",
        "Enter broad URls Before submission"
      );
    }

    db.ref("videos/").push({
      title,
      vidUrl
    });
    Alert.alert("Video submission", "Video Submitted successfully!");
    props.navigation.navigate("Videos");
    setvidUrl("");
    settitle("");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <Ionicons name='ios-videocam' size={50} color='#00344D' />
        </Text>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Video title'
              placeholderTextColor='#00344D'
              value={title}
              onChangeText={value => settitle(value)}
            />
            <TextInput
              style={styles.input}
              placeholder='Video url'
              placeholderTextColor='#00344D'
              value={vidUrl}
              onChangeText={value => setvidUrl(value)}
            />

            <TouchableOpacity style={styles.uploadBtn} onPress={onPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Add Videos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 8
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "95%",
    height: "95%",
    backgroundColor: "lightgray",
    borderRadius: 3
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
    fontSize: 20,
    color: "#00344D"
  },
  inputs: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5
  },
  inputContainer: {
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#00344D",
    marginVertical: 20
  },
  uploadBtn: {
    width: "80%",
    padding: 10,
    backgroundColor: "#44809D",
    marginVertical: 10,
    borderRadius: 5
  },
  btn: {
    width: "100%"
  }
});

export default AddBroad;
