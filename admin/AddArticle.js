import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

// //Firebase configurations
// const firebaseConfig = {
//   apiKey: 'AIzaSyDxsuzYOYOUcZ9adUutf260C-1bo9Z4f8E',
//   authDomain: 'stratic-research-institute.firebaseapp.com',
//   databaseURL: 'https://stratic-research-institute.firebaseio.com',
//   projectId: 'stratic-research-institute',
//   storageBucket: 'stratic-research-institute.appspot.com',
//   messagingSenderId: '681190964874',
//   appId: '1:681190964874:web:17b6f2da1218577bf4f773',
//   measurementId: 'G-ERTN8NM4KZ'
// };
// firebase.initializeApp(firebaseConfig);

const AddArticle = props => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [imgUrl, setimgUrl] = useState('');

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
  // //Image Picker library Function
  // let openImagePickerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert('Permission to access camera roll is required!');
  //     return;
  //   }

  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);
  // };

  const handlePress = async () => {
    if (title.length === 0) {
      return alert('Enter post Title');
    }
    if (imgUrl.length === 0) {
      return alert('Enter Image Url');
    }
    if (description.length === 0) {
      return alert('Include Description');
    }

    const data = {
      title,
      imgUrl,
      description
    };
    const req = await fetch(
      'https://stratic-research-institute.firebaseio.com/articles.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );
    const res = await req.json();
    alert('Article published!!!');
    props.navigation.navigate('Home');
    settitle(''), setdescription(''), setimgUrl('');
  };
  return (
    <View style={styles.screen}>
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
            <TextInput
              style={styles.input}
              placeholder='Add imageUrl'
              placeholderTextColor='#00344D'
              onChangeText={value => setimgUrl(value)}
              name='img'
              value={imgUrl}
            />
            {/* <TouchableOpacity
              style={styles.uploadBtn}
              onPress={openImagePickerAsync}
              value={file}
              onChangeText={value => setfile(value)}
            >
              <Text style={{ color: '#fff' }}>
                <Ionicons name='md-cloud-upload' size={25} color='#fff' />
                {'  '}
                Upload Featured Image
              </Text>
            </TouchableOpacity> */}
            <TextInput
              multiline={true}
              style={styles.input}
              placeholder='Add Description'
              placeholderTextColor='#00344D'
              onChangeText={value => setdescription(value)}
              name='description'
              value={description}
            />

            <TouchableOpacity style={styles.uploadBtn} onPress={handlePress}>
              <Text style={{ color: '#fff' }}>Post an Article</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '95%',
    height: '95%',
    backgroundColor: 'lightgray',
    borderRadius: 3
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 20,
    color: '#00344D'
  },
  inputs: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5
  },
  inputContainer: {
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#00344D',
    marginVertical: 20
  },
  uploadBtn: {
    width: '80%',
    padding: 10,
    backgroundColor: '#44809D',
    marginVertical: 10,
    borderRadius: 5
  },
  btn: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  }
});
export default AddArticle;
