import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAhp5durVAb425H7NTyA9LVZhFOu5ESkeI',
  authDomain: 'reactjs-netflix-5b06d.firebaseapp.com',
  projectId: 'reactjs-netflix-5b06d',
  storageBucket: 'reactjs-netflix-5b06d.appspot.com',
  messagingSenderId: '622451040384',
  appId: '1:622451040384:web:c3c17b9bb60a3f2e9d4665',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

export default db;
