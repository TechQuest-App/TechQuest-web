// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     window.localStorage.getItem("authToken") ? true : false
//   );

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("authToken");
//       if (token) {
//         try {
//           const response = await axios.get(
//             "https://indecoding.frevva.com/api/validate-token",
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           if (response.status === 200) {
//             setIsAuthenticated(true);
//           } else {
//             setIsAuthenticated(false);
//           }
//         } catch (error) {
//           // Improved error handling
//           toast.error(
//             `Token validation failed: ${
//               error.response?.data?.message || error.message
//             }`
//           );
//           setIsAuthenticated(false);
//         }
//       } else {
//         setIsAuthenticated(false);
//       }
//     };
//     checkAuth();
//   }, []);

//   const login = () => setIsAuthenticated(true);

//   const logout = async () => {
//     try {
//       await axios.post(
//         "https://indecoding.frevva.com/api/logout",
//         {},
//         {
//           headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include token in the logout request
//           },
//         }
//       );
//       setIsAuthenticated(false);
//       localStorage.removeItem("authToken"); // Remove token from localStorage
//       toast.success("Logout successful");
//     } catch (error) {
//       toast.error(
//         `Logout failed: ${error.response?.data?.message || error.message}`
//       );
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem("authToken") ? true : false
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Temporarily bypassing token validation
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = () => setIsAuthenticated(true);

  const logout = async () => {
    try {
      await axios.post(
        "https://indecoding.frevva.com/api/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include token in the logout request
          },
        }
      );
      setIsAuthenticated(false);
      localStorage.removeItem("authToken"); // Remove token from localStorage
      toast.success("Logout successful");
    } catch (error) {
      toast.error(
        `Logout failed: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
