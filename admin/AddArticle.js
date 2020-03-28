import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, storage } from "../components/config";

const AddArticle = props => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [imgUrl, setimgUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);
  const [progress, setprogress] = useState("");
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

  const upload = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    setFile(blob);
  };

  const uploadImage = () => {
    const uploadTask = storage
      .ref()
      .child("articles")
      .child(title)
      .put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setprogress("Uploading  " + progress.toFixed(2) + "%  done");
        setStatus(true);
      },
      err => console.log(err),
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(uri => setimgUrl(uri));
        setStatus(false);
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
    db.ref("articles/").push({
      title,
      imgUrl,
      description
    });

    settitle(""), setdescription(""), setimgUrl(null);
    setFile(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <EvilIcons name='pencil' size={35} color='#00344D' />
          Add an Article
        </Text>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Add Title'
              placeholderTextColor='#00344D'
              onChangeText={value => settitle(value)}
              name='title'
              value={title}
            />

            <TouchableOpacity
              style={styles.uploadBtn}
              onPress={openImagePickerAsync}
            >
              <Text style={{ color: "#00344D" }}>
                <Ionicons name='md-cloud-upload' size={18} color='#00344D' />
                {"  "}
                Upload Featured Image
              </Text>
            </TouchableOpacity>
            {status ? (
              <TouchableOpacity style={styles.uploadBtn}>
                <View>
                  <Text style={{ color: "#00344D", fontWeight: "bold" }}>
                    {progress}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}

            <TextInput
              multiline={true}
              style={styles.input}
              placeholder='Add Description'
              placeholderTextColor='#00344D'
              onChangeText={value => setdescription(value)}
              name='description'
              value={description}
            />

            <TouchableOpacity style={styles.btn} onPress={handlePress}>
              <Text style={{ color: "#fff" }}>Post an Article</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
    padding: 5,
    backgroundColor: "#C3C6C8",
    marginLeft: -50,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 3
  },
  btn: {
    backgroundColor: "#44809D",

    padding: 10,
    borderRadius: 5,

    paddingHorizontal: 20
  }
});
export default AddArticle;
