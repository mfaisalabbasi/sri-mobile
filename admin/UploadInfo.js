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
import { db, storage } from "../components/config";
import { ScrollView } from "react-native-gesture-handler";

const UploadInfo = props => {
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

  //states for components
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [progress, setprogress] = useState("");
  const [status, setStatus] = useState(false);

  const [infoUrl, setinfoUrl] = useState(null);

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
  // upload Image Function
  const upload = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    setinfoUrl(blob);
  };

  const uploadImage = async () => {
    // ref
    const upload = storage.ref();
    const uptask = upload
      .child(`infographics`)
      .child(title)
      .put(infoUrl);
    // progress
    uptask.on(
      "state_changed",
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setprogress("Uploading " + progress.toFixed(2) + "% done");
        setStatus(true);
      },
      // err handling
      err => console.log(err),
      //uploaded successfully
      () => {
        uptask.snapshot.ref.getDownloadURL().then(uri => setImgUrl(uri));
        setStatus(false);
      }
    );
  };

  const onPress = async => {
    if (title.length === 0) {
      return Alert.alert(
        "Submission Failed",
        "Add Infographic Title Before uploading"
      );
    }
    uploadImage();

    db.ref("infographics/").push({
      imgUrl
    });

    setinfoUrl("");
    setTitle("");
    setImgUrl(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <Ionicons name='md-cloud-upload' size={27} color='#00344D' /> Upload
          Infographics
        </Text>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Add Title'
              placeholderTextColor='#00344D'
              value={title}
              onChangeText={value => setTitle(value)}
            />

            <TouchableOpacity
              style={styles.uploadBtn}
              onPress={openImagePickerAsync}
            >
              <Text style={{ color: "#00344D" }}>
                <Ionicons name='md-cloud-upload' size={18} color='#00344D' />
                {"  "}
                Upload Infographic
              </Text>
            </TouchableOpacity>
            {status ? (
              <TouchableOpacity style={styles.uploadBtn}>
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#00344D",
                      fontWeight: "bold"
                    }}
                  >
                    {progress}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}

            <TouchableOpacity style={styles.btn} onPress={onPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Upload Infographics
              </Text>
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

    borderRadius: 3,
    marginBottom: 30
  },
  btn: {
    backgroundColor: "#44809D",

    padding: 10,
    borderRadius: 5,

    paddingHorizontal: 20
  }
});

export default UploadInfo;
