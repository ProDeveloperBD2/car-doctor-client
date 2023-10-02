import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user provider', currentUser)
            setUser(currentUser)
            setLoader(false)
            if (currentUser && currentUser.email) {
                const userInfo = {
                    email: currentUser.email
                }
                fetch('https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response', data)
                        localStorage.setItem('car-access-token', data.token)
                    })
            }
            else {
                localStorage.removeItem('car-access-token');
            }
        })
        return () => {
            return unsubscribe();
        }
    }, []);
    const createUserWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const profileUpdate = (user, name) => {
        return updateProfile(user, name);
    }
    const authInfo = { createUser, signInUser, createUserWithGoogle, profileUpdate, logOut, user, loader }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;