/** @format */

import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Footer from './components/inc/footer';
import Car from './components/pages/SingleCar/Car';
import Prodavac from './components/pages/Prodavac';
import AddNewCar from './components/pages/AddNewCar/AddNewCar';
import Reservations from './components/pages/Reservations';
import Newreservation from './components/inc/Newreservation';
import Offer from './components/pages/AllCars/Offer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './Contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminPage from './components/pages/AdminPage/Index';

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthContextProvider>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Login />
						</Route>

						<Route exact path='/signup'>
							<Signup />
						</Route>
						<ProtectedRoute exact path='/offer' component={Offer} />

						<ProtectedRoute exact path='/car/:id' component={Car} />
						<ProtectedRoute exact path='/prodavac' component={Prodavac} />
						<ProtectedRoute exact path='/addnewcar' component={AddNewCar} />
						<ProtectedRoute
							exact
							path='/reservations'
							component={Reservations}
						/>
						<ProtectedRoute
							exact
							path='/newreservation'
							component={Newreservation}
						/>
						<Route exact path='/adminpage' component={AdminPage} />
					</Switch>
					<Footer />
				</AuthContextProvider>
			</Router>
		</div>
	);
}

export default App;
