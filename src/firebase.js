
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyBznHHVK145EL8aaLX5RDi2cuQACurZWPM",
  authDomain: "netflix-clone-8d8e0.firebaseapp.com",
  projectId: "netflix-clone-8d8e0",
  storageBucket: "netflix-clone-8d8e0.firebasestorage.app",
  messagingSenderId: "530016212908",
  appId: "1:530016212908:web:20ab9e5f2d1df7ebf38c09",
  measurementId: "G-Y8QV4QR6V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)


const signUp=async(name,email,password)=>{
try {
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,'user'),{
    uid:user.uid,
    name,
    authProvider:'local',
    email,
   });

} catch (error) {
    console.log(error)
   toast.error(error.code.split('/')[1].split('-').join(''));
}
}


const login=async(email,password)=>{
try {
   await signInWithEmailAndPassword(auth,email,password)
  
} catch (error) {
  console.error("Login error:", error.code);

  switch (error.code) {
    case "auth/invalid-credential":
      toast.error("Incorrect email or password.");
      break;

    case "auth/invalid-email":
      toast.error("Please enter a valid email address.");
      break;

    case "auth/too-many-requests":
      toast.error("Too many attempts. Please try again later.");
      break;

    default:
      toast.error("Unable to sign in. Please try again.");
  }
}
}

const Logout=()=>{
signOut(auth)
}

export {auth,db,login,signUp,Logout}