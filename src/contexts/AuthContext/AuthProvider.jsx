import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoadign] = useState(true)

    const createUser = (email, password) => {
        setLoadign(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoadign(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
 
    const signInWithGoogle = () =>{
        setLoadign(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () => {
        setLoadign(true)
        return signOut(auth);
    }

    // Observes the current situation of the auth. Whether the user is logged in or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            setLoadign(false) // After finding user data it stops loading
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    }
    return (
        // All the children in the authContext can user authInfo 
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;