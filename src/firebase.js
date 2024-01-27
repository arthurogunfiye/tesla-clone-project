import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Sa6ShJPBuSs-l62v8jVyA3kU7kSZFMw",
  authDomain: "tesla-clone-2b234.firebaseapp.com",
  projectId: "tesla-clone-2b234",
  storageBucket: "tesla-clone-2b234.appspot.com",
  messagingSenderId: "125232679637",
  appId: "1:125232679637:web:036dbed7582679f362705c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
