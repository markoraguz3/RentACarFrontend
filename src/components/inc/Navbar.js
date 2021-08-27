import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

function Navbar() {
   const { logout, isLogged } = useContext(AuthContext);

   return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <div class="container-fluid">
            <Link to="/" class="navbar-brand">
               Rent a car
            </Link>

            <button
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  {isLogged && (
                     <>
                        <li className="nav-item">
                           <Link to="/reservations" class="nav-link active">
                              Rezervacije
                           </Link>
                        </li>
                        <li className="nav-item" onClick={() => logout()}>
                           <Link to="/" class="nav-link active">
                              Odjavi se
                           </Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
