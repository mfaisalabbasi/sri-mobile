import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, storage } from "../components/config";

const AddArticle = (props) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);
  const [progress, setprogress] = useState("");
  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={styles.icon}>
          <Ionicons
            name='ios-menu'
            color='white'
            size={32}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      );
    },
  });
  //Image Picker library Function
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    upload(pickerResult.uri);
  };

  const upload = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    setFile(blob);
  };

  const uploadImage = async () => {
    const uploadTask = storage
      .ref()
      .child("articles")
      .child(title + Date.now())
      .put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setprogress("Uploading  " + progress.toFixed(2) + "%  done");
        setStatus(true);
      },
      (err) => console.log(err),
      async () => {
        const imgUrl = await uploadTask.snapshot.ref.getDownloadURL();

        await fetch(
          `https://stratic-research-institute.firebaseio.com/articles.json`,
          {
            method: "post",
            headers: {
              ContentType: "application/json",
            },
            body: JSON.stringify({
              imgUrl,
              title,
              description,
            }),
          }
        );

        setStatus(false);
        Alert.alert("Successful !!!", "Article Published SuccessFully");
        props.navigation.navigate("Home");
      }
    );
  };

  const handlePress = async () => {
    if (title.length === 0) {
      return Alert.alert("Submission Failed", "Add title Before submission");
    }

    if (description.length === 0) {
      return Alert.alert(
        "Submission Failed",
        "Add Description Before submission"
      );
    }
    uploadImage();
    setFile(null), settitle(""), setdescription("");
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <Foundation name='clipboard-pencil' size={70} color='#44809D' />
        </Text>

        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder='Add Title'
            placeholderTextColor='#44809D'
            onChangeText={(value) => settitle(value)}
            name='title'
            value={title}
          />

          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={openImagePickerAsync}
          >
            <Text style={{ color: "#44809D" }}>
              <Ionicons name='md-cloud-upload' size={18} color='#44809D' />
              {"  "}
              Upload Featured Image
            </Text>
          </TouchableOpacity>
          {status ? (
            <TouchableOpacity style={styles.uploadBtn}>
              <View>
                <Text style={{ color: "#44809D", fontWeight: "bold" }}>
                  {progress}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}

          <TextInput
            style={styles.input}
            placeholder='Add Description'
            placeholderTextColor='#44809D'
            onChangeText={(value) => setdescription(value)}
            name='description'
            value={description}
            returnKeyType='done'
          />

          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Post an Article
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 8,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "95%",
    height: "95%",
    backgroundColor: "lightgray",
    borderRadius: 3,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
    fontSize: 20,
    color: "#44809D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  inputs: {
    width: "99%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
  },
  inputContainer: {
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#44809D",
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  uploadBtn: {
    width: "80%",
    padding: 12,
    backgroundColor: "#C3C6C8",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 3,
    marginBottom: -3,
  },
  btn: {
    backgroundColor: "#44809D",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 20,
  },
});
export default AddArticle;
