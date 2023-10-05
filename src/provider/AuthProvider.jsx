import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import PropTypes from "prop-types"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

// create user with email

const createUserWithEmail = (email,pass) =>{
   return createUserWithEmailAndPassword(auth, email,pass)
}
// login with email and password
const loginWithEmail = (email, pass) =>{
    return signInWithEmailAndPassword(auth, email, pass)
} 
// log out
const logOut = () =>{
    return signOut(auth)
}
// on auth state change 

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    return () => {
        unSubscribe()
    }
},[])



    const authInfo = {
        user, createUserWithEmail, loginWithEmail, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
}

export default AuthProvider;