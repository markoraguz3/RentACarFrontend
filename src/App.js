import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Footer from "./components/inc/footer";
import Car from "./components/pages/Car";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
   return (
      <Router>
         <div>
            <Navbar />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>

               <Route path="/signup">
                  <Signup />
               </Route>

               <Route path="/login">
                  <Login />
               </Route>

               <Route path="/car">
                  <Car />
               </Route>
            </Switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
