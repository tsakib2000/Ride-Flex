/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebase.config";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { axiosSecure } from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}
const signOutUser=()=>{
    return signOut(auth)
}
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        await axiosSecure.post("/jwt",{ email: currentUser?.email,} );
        setLoading(false);
      }else{
        await axiosSecure.post('/logout')
        setUser(currentUser)
      setLoading(false);

      }
      
  
    });

    return () => {
      return unsubscribe();
    };
  });

  const authInfo = {
    user,
    setUser,
    loading,
    createNewUser,
    updateUserProfile,
    signInUser,
    signOutUser,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
