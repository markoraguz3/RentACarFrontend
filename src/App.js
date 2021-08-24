import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Footer from "./components/inc/footer";
import Car from "./components/pages/Car";
import Prodavac from "./components/pages/Prodavac";
import AllCars from "./components/inc/AllCars";
import AddNewCar from "./components/inc/AddNewCar";
import Reservations from "./components/pages/Reservations";
import Newreservation from "./components/inc/Newreservation";
import Offer from "./components/pages/Offer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
   return (
      <div className="App">
         <Router>
            <AuthContextProvider>
               <Navbar />
               <Switch>
                  <Route exact path="/">
                     <Login />
                  </Route>

                  <Route exact path="/home">
                     <Home />
                  </Route>

                  <Route exact path="/signup">
                     <Signup />
                  </Route>

                  <Route exact path="/car">
                     <Car />
                  </Route>

                  <Route exact path="/prodavac">
                     <Prodavac />
                  </Route>

                  <Route exact path="/AllCars">
                     <AllCars />
                  </Route>

                  <Route exact path="/AddNewCar">
                     <AddNewCar />
                  </Route>

                  <Route exact path="/reservations">
                     <Reservations />
                  </Route>

                  <Route exact path="/newreservation">
                     <Newreservation />
                  </Route>

                  <Route exact path="/offer">
                     <Offer />
                  </Route>
               </Switch>
               <Footer />
            </AuthContextProvider>
         </Router>
      </div>
   );
}

export default App;
