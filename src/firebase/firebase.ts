import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDO_9GXEhepghqbvNrcVwxaamVsqwtw-hA",
    authDomain: "restaurant-site-b67d9.firebaseapp.com",
    projectId: "restaurant-site-b67d9",
    storageBucket: "restaurant-site-b67d9.appspot.com",
    messagingSenderId: "505535495881",
    appId: "1:505535495881:web:fc43d46383028cc5b2d718"
};

// initialize firebase
initializeApp(firebaseConfig)

// init firestore 

const database = getFirestore()

export const colRef = collection(database, "details")
export const ReserveRef = collection(database, "reservation")