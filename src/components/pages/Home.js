import React from 'react';
import Slider from '../inc/Slider';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import slika1 from '../images/slika2.PNG';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';

function Home() {
    return(
        <div>
            <div class = "content">
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
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>

                        <div class = "section border-top">
                        <div class = "container">
                            <div class = "row">
                            <div class= "col"></div>
                            <div class = "col">
                                <Link to = "/offer" ><Button>Pogledaj ponudu svih automobila</Button></Link>
                            </div>
                            <div class = "col"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Home;