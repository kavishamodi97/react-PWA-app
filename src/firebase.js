import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyDMriTV1kwPiiuO-H-XioNLaR2vf5NEWXk",
    authDomain: "react-pwa-app-86a6a.firebaseapp.com",
    projectId: "react-pwa-app-86a6a",
    storageBucket: "react-pwa-app-86a6a.appspot.com",
    messagingSenderId: "316611910552",
    appId: "1:316611910552:web:c92e4ca3e96a31b81b29ed",
    measurementId: "G-WBSRCJVRC2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default firebase