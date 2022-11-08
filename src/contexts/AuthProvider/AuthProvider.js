import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../components/firebase/firebase.config';
import { Toaster } from 'react-hot-toast';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //create user email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user profiel update
    const updateUser = (userUpdateInfo) => {
        return updateProfile(auth.currentUser, userUpdateInfo);
    }

    //google popup sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // observer auth
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
    };
    return (
      <AuthContext.Provider value={userInfo}>
        {children}
        <Toaster />
      </AuthContext.Provider>
    );
};

export default AuthProvider;