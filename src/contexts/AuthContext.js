// RootContext.js
import React, { useState } from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        username,
        setUsername,
        password,
        setPassword,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
