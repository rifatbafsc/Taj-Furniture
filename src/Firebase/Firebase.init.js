// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATrkPQllNDW9lty6PLs2YSUSO6spG5RU4",
  authDomain: "taj-furniture-c54c0.firebaseapp.com",
  projectId: "taj-furniture-c54c0",
  storageBucket: "taj-furniture-c54c0.appspot.com",
  messagingSenderId: "63936898695",
  appId: "1:63936898695:web:69e68ff10a670eef8ffa22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;