import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXkDbk-libON7Me9RdTaZwHVRIYJS_qqA",
  authDomain: "pokedex-20002.firebaseapp.com",
  projectId: "pokedex-20002",
  storageBucket: "pokedex-20002.appspot.com",
  messagingSenderId: "69988775748",
  appId: "1:69988775748:web:bebd2a760518ac6b97c911",
  measurementId: "G-M6Q3V5E2NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
