
import { initializeApp } from "firebase/app";

import { createUserWithEmailAndPassword,
        getAuth, 
        signInWithEmailAndPassword,
        signOut
} from "firebase/auth";
// import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc,
         collection,
         getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netlfix-clone-project-6699c.firebaseapp.com",
  projectId: "netlfix-clone-project-6699c",
  storageBucket: "netlfix-clone-project-6699c.firebasestorage.app",
  messagingSenderId: "878438832291",
  appId: "1:878438832291:web:48113ceb2a90007b788716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"users"),{
uid:user.uid,
name,
authProvider:"local",
email,

        });
        console.log("Data Added");
    }
    catch(error){

console.log(error);
alert(error);

    }

}

const login = async (email,password)=>
{
    try{
await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
console.log(error);
alert(error);
    }
}

const logout=()=>
{
    signOut(auth)
}

export {auth,db,login,signup,logout}