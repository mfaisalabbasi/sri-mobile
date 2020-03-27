import * as firebase from "firebase";
//firebase configurations
let firebaseConfig = {
  apiKey: "AIzaSyDxsuzYOYOUcZ9adUutf260C-1bo9Z4f8E",
  authDomain: "stratic-research-institute.firebaseapp.com",
  databaseURL: "https://stratic-research-institute.firebaseio.com",
  projectId: "stratic-research-institute",
  storageBucket: "gs://stratic-research-institute.appspot.com/",
  messagingSenderId: "681190964874",
  appId: "1:681190964874:web:17b6f2da1218577bf4f773",
  measurementId: "G-ERTN8NM4KZ"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const storage = app.storage();
