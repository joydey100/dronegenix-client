import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

// Create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allFirebase = useFirebase();

  return (
    <AuthContext.Provider value={allFirebase}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
