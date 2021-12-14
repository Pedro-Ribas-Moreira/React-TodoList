import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import auth from "../firebase";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  onRegister: () => {},
});

export const AuthContextProvider = (props) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     const storedUserLoggedInInformation = AuthContextProvider();
  //     if (storedUserLoggedInInformation === "1") {
  //       setIsLoggedIn(true);
  //     }
  //   }, []);

  const loginHandler = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <AuthContext.Provider
      value={{
        // isLoggedIn: isLoggedIn,
        // onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
