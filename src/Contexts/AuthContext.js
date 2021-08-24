import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const history = useHistory();

   const [isLogged, setIsLogged] = useState(
      localStorage.getItem("token") ? true : false
   );

   const [state, setState] = useState({
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
      roleId: localStorage.getItem("roleId"),
   });

   const login = (token, userId, roleId) => {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("roleId", roleId);
      setIsLogged(true);
      setState({ ...state, token, userId, roleId });
   };

   const logout = () => {
      localStorage.setItem("token", null);
      localStorage.setItem("userId", null);
      localStorage.setItem("roleId", null);
      setIsLogged(false);
      setState({ ...state, token: null, userId: null, roleId: null });
      history.push("/");
   };

   return (
      <AuthContext.Provider value={{ ...state, logout, login, isLogged }}>
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
