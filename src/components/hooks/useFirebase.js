import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut  } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
        
    };

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('')
                const newUser = { email, displayName: name };
                setUser(newUser)
                //save user to the database
                saveUser(email, name)
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
                // ..
            })
            .finally(() => setIsLoading(false));

    };


     //signin email and password
     const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location.state?.from || '/';
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false));;
    }

    //observer state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []);

    //check admin or not
    useEffect( () =>{
        fetch(`https://evil-goosebumps-76567.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

    } ,[user.email])


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

    //save user
    const saveUser = (email, displayName) => {
        const user = {email,displayName};
        fetch('https://evil-goosebumps-76567.herokuapp.com/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }


    return{
        user,
        isLoading,
        loginUser,
        admin,
        authError,
        signInUsingGoogle,
        registerUser,
        logOut
    }

}

export default useFirebase;


