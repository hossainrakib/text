import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../fire-base";

const AuthorContext = React.createContext();

export function UseAuthor() {
  return useContext(AuthorContext);
}

export function AuthorProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // signup
  async function signin(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //login

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //log out

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    signin,
    login,
    logout,
    currentUser,
  };
  return (
    <AuthorContext.Provider value={value}>
      {!loading && children}
    </AuthorContext.Provider>
  );
}
