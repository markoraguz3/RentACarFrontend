import React from 'react';
import Slider from '../inc/Slider';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Service1 from '../images/slika2.PNG';


function Home() {
    return(
        <div>
            <Slider />

            <section className ="section border-top">
                <div className="container">
                    <div className="row">
                        <div className ="col-md-12 mb-4 text-center">
                            <h3 className = "main-heading">Rezerviraj</h3>
                            <div className ="underline mx-auto"></div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {Service1} className = "w-100 border-bottom" alt="Services" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/about" className ="btn btn-link">Rezerviraj</Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {Service1} className = "w-100 border-bottom" alt="Services" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/about" className ="btn btn-link">Rezerviraj</Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {Service1} className = "w-100 border-bottom" alt="Services" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/about" className ="btn btn-link">Rezerviraj</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </section>
        </div>
    );
}

export default Home;