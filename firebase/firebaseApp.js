// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmRasI3FLyr1ranhq-hUYeKeYQO-GY_18",
    authDomain: "flux-wallet.firebaseapp.com",
    projectId: "flux-wallet",
    storageBucket: "flux-wallet.appspot.com",
    messagingSenderId: "889053961364",
    appId: "1:889053961364:web:7aa119d809817c81592881"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}