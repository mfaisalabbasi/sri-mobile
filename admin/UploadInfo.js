import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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

  const [title, settitle] = useState('');
  const [infoUrl, setinfoUrl] = useState('');

  const onPress = async () => {
    if (title.length === 0) {
      return alert('Enter post title');
    }
    if (infoUrl.length === 0) {
      return alert('Enter Info Urls');
    }
    const data = {
      title,
      infoUrl
    };
    const req = await fetch(
      'https://stratic-research-institute.firebaseio.com/infographics.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );
    const res = await req.json();
    console.log('This is Info ', res);
    alert('Infographic is uploaded');
    props.navigation.navigate('Infographics');
    setinfoUrl('');
    settitle('');
  };
  return (
    <View style={styles.screen}>
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
              onChangeText={value => settitle(value)}
            />
            <TextInput
              style={styles.input}
              placeholder='Add infoUrl'
              placeholderTextColor='#00344D'
              value={infoUrl}
              onChangeText={value => setinfoUrl(value)}
            />
            {/* <TouchableOpacity
              style={styles.uploadBtn}
              onPress={openImagePickerAsync}
            >
              <Text style={{ color: '#fff' }}>
                <Ionicons name='md-cloud-upload' size={25} color='#fff' />
                {'  '}
                Upload Featured Image
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.uploadBtn} onPress={onPress}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>
                Upload Infographics
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
    width: '100%'
  }
});

export default UploadInfo;
