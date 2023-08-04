import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
 //state that stores sidenav status
  const [isSideNavActive, setSideNav] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isSideNavActive,
        setSideNav,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
