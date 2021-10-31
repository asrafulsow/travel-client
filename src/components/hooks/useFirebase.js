import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut  } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
        
    };

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(()=> setIsLoading(false))
    }

    useEffect( () =>{
            onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            setIsLoading(false);
          });
    } ,[]);

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;


