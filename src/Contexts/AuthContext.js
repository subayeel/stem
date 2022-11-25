import React, { useContext, useState, useEffect } from "react";

//auth imports
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db } from "../firebase";

import { collection, query, where, getDocs } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [stemId, setStemId] = useState("");

  //admin states
  const [isAdmin, setAdmin] = useState(false);

  //get auth user details
  const getUserDetails = async (email) => {
    const userReference = collection(db, "userDetails");
    // Create a query against the collection.
    const q = query(userReference, where("userEmail", "==", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUseremail(email);
      setName(doc.data().name);
      setCollegeName(doc.data().collegeName);
      setStemId(doc.data().stemId);
     
    });
  };

  //check user auth
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.email === "abdullahsubayeel999@gmail.com") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
        // User is signed in.
        
        await getUserDetails(user.email);
      } else {
        // No user is signed in.

        console.log("no user");
      }
    });
  }, [auth, name]);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    name,
    collegeName,
    stemId,
    userEmail,
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
