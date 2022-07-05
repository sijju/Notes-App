import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCjYSDhuADlkGq_bIiF7PX5h0CB7HI1ZFw",
  authDomain: "todo-3434a.firebaseapp.com",
  projectId: "todo-3434a",
  storageBucket: "todo-3434a.appspot.com",
  messagingSenderId: "684365019897",
  appId: "1:684365019897:web:19486528c1dff8b25bc028",
  measurementId: "G-E75LVE4LYJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
