import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../firebase/firebase.init'

export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const handleLogout = () => {
        return signOut(auth)
    }

    const authInfo = {
        manageProfile,
        handleLogout,
        handleGoogleLogin,
        handleLogin,
        handleRegister,
        user,
        loading,
        setUser
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }
        })
        return ()=> {
            unSubscribe();
        } 
    } , [])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;