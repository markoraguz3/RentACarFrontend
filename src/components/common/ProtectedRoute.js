import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

function ProtectedRoute({ component: Component, ...restOfProps }) {
   const { isLogged } = useContext(AuthContext);
   return (
      <Route
         {...restOfProps}
         render={(props) =>
            isLogged ? <Component {...props} /> : <Redirect to="/" />
         }
      />
   );
}

export default ProtectedRoute;
