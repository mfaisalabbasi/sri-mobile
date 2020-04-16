import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
const Single = (props) => {
  const { id } = props.route.params;
  props.navigation.setOptions({
    headerRight: () => {
      return (
        <View style={{ ...styles.icon, marginRight: 12 }}>
          <Ionicons
            name='md-download'
            color='white'
            size={26}
            onPress={() =>
              Alert.alert(
                "Do you want to download this file ?",
                "This will auto save file into device",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => downloadFile() },
                ],
                { cancelable: false }
              )
            }
          />
        </View>
      );
    },
  });
  const downloadFile = async () => {
    const uri = id;
    let fileUri = FileSystem.documentDirectory + "small.jpg";
    FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
        saveFile(uri);
        Alert.alert("Success !!!", "File downloded in your Directory");
      })
      .catch((error) => {
        Alert.alert("Download failed !!!", "something went wrong, try later");
      });

    saveFile = async (url) => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(url);
        await MediaLibrary.createAlbumAsync("SRI", asset, false);
      }
    };
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.down} activeOpacity={0.9}>
        <Image
          source={{ uri: id }}
          style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        />
      </TouchableOpacity>
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
