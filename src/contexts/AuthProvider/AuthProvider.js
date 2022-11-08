import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../components/firebase/firebase.config';
import { Toaster } from 'react-hot-toast';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    //create user email and password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user profiel update
    const updateUser = (userUpdateInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, userUpdateInfo);
    }

    //google popup sign in
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    //login with email and password
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //user logout
    const logOut = () => {
        setLoader(false)
        return signOut(auth)
    }

    // observer auth
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const userInfo = {
      user,
      createUser,
      updateUser,
      googleSignIn,
      loginUser,
      logOut,
      loader,
    };
    return (
      <AuthContext.Provider value={userInfo}>
        {children}
        <Toaster />
      </AuthContext.Provider>
    );
};

export default AuthProvider;