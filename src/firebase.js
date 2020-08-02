
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCNaLb1Hv9_hK_9q8ZVYUY_4zPlCu63g_g",
        authDomain: "todo-app-cp-e112a.firebaseapp.com",
        databaseURL: "https://todo-app-cp-e112a.firebaseio.com",
        projectId: "todo-app-cp-e112a",
        storageBucket: "todo-app-cp-e112a.appspot.com",
        messagingSenderId: "581618083158",
        appId: "1:581618083158:web:d22327dd088dbf4a28e2f7",
        measurementId: "G-MXSXT6G0FS"

  });

const db = firebaseApp.firestore();

export default db ;
