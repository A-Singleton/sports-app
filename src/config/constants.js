import * as firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "add-users-to-app.firebaseapp.com",
  databaseURL: "https://add-users-to-app.firebaseio.com",
  projectId: "add-users-to-app",
  storageBucket: "add-users-to-app.appspot.com",
  messagingSenderId: "593111009070"
}

firebase.initializeApp(config);

export const db = firebase.database();
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth;
export const firebaseStorageRef = firebase.storage().ref();
export const taskEvent = firebase.storage.TaskEvent;
