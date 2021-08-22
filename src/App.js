import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home'; 
import Signup from './components/pages/Signup'; 
import Login from './components/pages/Login';
import Footer from './components/inc/footer';
import Car from './components/pages/Car';
import Prodavac from './components/pages/Prodavac';
import AllCars from './components/inc/AllCars';
import AddNewCar from './components/inc/AddNewCar';
import Reservations from './components/pages/Reservations';
import Newreservation from './components/inc/Newreservation';
import Offer from './components/pages/Offer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <div className = "App">
    <Router>
        <Navbar />
          <Switch>

            <Route exact path = "/">
              <Home />
            </Route>

            <Route path = "/signup">
              <Signup />
            </Route>

            <Route path = "/login">
              <Login />
            </Route>

            <Route path = "/car">
              <Car />
            </Route>

            <Route path = "/prodavac">
              <Prodavac />
            </Route>

            <Route path = "/AllCars">
              <AllCars />
            </Route>

            <Route path = "/AddNewCar">
              <AddNewCar />
            </Route>

            <Route path = "/reservations">
              <Reservations />
            </Route>

            <Route exact path = "/newreservation">
              <Newreservation />
            </Route>

            <Route path = "/offer">
              <Offer />
            </Route>

          </Switch>
        </Router>
      <Footer/>
  </div>
    
  );
}

export default App;
