import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [services, setServices] = useState([]);
    const [PopularEvents, setPopularEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/corporateEvents.json")
            .then(res => res.json())
            .then(data => setServices(data))

        fetch("/PopularEvents.json")
            .then(res => res.json())
            .then(data => setPopularEvents(data))

    }, [])
    const socialLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const profile = (name, photo) => {
        setLoading(true)
        return (
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
        )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const info = {
        services,
        PopularEvents,
        socialLogIn,
        createUser,
        user,
        logInUser,
        logOut,
        loading,
        profile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;