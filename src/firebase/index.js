import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzm-p2AgBu5WmQuCIoizxEuIzoQGQgfxY",
  authDomain: "techwearclubar.firebaseapp.com",
  projectId: "techwearclubar",
  storageBucket: "techwearclubar.appspot.com",
  messagingSenderId: "1086600538403",
  appId: "1:1086600538403:web:d6b578afd486fb20a84496"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)