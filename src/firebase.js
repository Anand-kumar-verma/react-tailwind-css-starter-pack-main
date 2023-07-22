import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLY43cX-ZJWGX8sbnyhafxSblzBxeDcj4",
    authDomain: "deliveryproject-c36a2.firebaseapp.com",
    projectId: "deliveryproject-c36a2",
    storageBucket: "deliveryproject-c36a2.appspot.com",
    messagingSenderId: "43670912968",
    appId: "1:43670912968:web:90f02b17c8defd7a548afd",
    measurementId: "G-RGQMLL6QMD"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }