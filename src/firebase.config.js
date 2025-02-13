import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBkBJr7vGAenVgUO3VxBGOFLyx5Zp01id0",
  authDomain: "reciper-web.firebaseapp.com",
  projectId: "reciper-web",
  storageBucket: "reciper-web.firebasestorage.app",
  messagingSenderId: "291890355280",
  appId: "1:291890355280:web:110a3d40de1434f62c4555"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;