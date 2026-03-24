import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyOmmCKGK3Whrds6UXjB2-ysbmXKAp76R5U",
  authDomain: "videoscan-saas.firebaseapp.com",
  projectId: "videoscan-saas",
  storageBucket: "videoscan-saas.firebasestorage.app",
  messagingSenderId: "241310932562",
  appId: "1:241310932562:web:2e37af7d704b61ca33898b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
