// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   const login = (user) => {
//     setIsLoggedIn(true);
//     setUserInfo(user);  // Guardar la información del usuario
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserInfo(null);  // Limpiar la información del usuario
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
