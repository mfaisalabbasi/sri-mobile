import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const AddArticle = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handlePress = async () => {
    try {
      const req = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxsuzYOYOUcZ9adUutf260C-1bo9Z4f8E",
        {
          method: "POST",
          headers: {
            ContentType: "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const res = await req.json();
      if (res.error) {
        Alert.alert("Invalid Credentials", "check your email or password");
      } else {
        const token = res.idToken;
        await AsyncStorage.setItem("token", token);
        props.navigation.navigate("Infographics");
        setEmail("");
        setPassword("");
        Alert.alert("successful", "welcome, operation succeed");
      }
    } catch (error) {
      alert("something went wrong check credentials");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <FontAwesome name='user-secret' size={100} color='#44809D' />
        </Text>

        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder='Type Email ...'
            placeholderTextColor='#44809D'
            onChangeText={(value) => setEmail(value)}
            name='email'
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder='Password ...'
            placeholderTextColor='#44809D'
            onChangeText={(value) => setPassword(value)}
            name='password'
            value={password}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Sign In</Text>
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
    backgroundColor: "lightgray",
  },
  form: {
    width: "95%",
    height: "auto",
    borderRadius: 3,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    padding: 1,
    fontSize: 20,
    color: "#44809D",
    justifyContent: "center",
  },
  inputs: {
    width: "99%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 2,
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
    marginVertical: 10,
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
