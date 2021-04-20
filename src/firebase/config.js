import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD5mEIwpvZSQUBMhniMXTbwPKG2WiMUR18",
  authDomain: "udemy-vue-firebase-sites-aa203.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-aa203",
  storageBucket: "udemy-vue-firebase-sites-aa203.appspot.com",
  messagingSenderId: "129333690540",
  appId: "1:129333690540:web:3ac0f233a8afa695e21f09"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestorm = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestorm, timestamp }