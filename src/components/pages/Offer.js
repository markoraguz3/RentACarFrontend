import react from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'reactstrap';
import slika1 from '../images/slika2.PNG';
import Pagination from 'react-bootstrap/Pagination';

function Offer() {
    return(
        <div class =" content">
            <section className ="section border-top">
            <div className="container">
                    <div className="row">
                        <div className ="col-md-12 mb-4 text-center">
                            <h3 className = "main-heading">Ponuda svih automobila</h3>
                            <div className ="underline mx-auto"></div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className ="col-md-12 mb-4 text-center">
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className ="col-md-12 mb-4 text-center">
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 text-center">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <p>Audi A4 2.0TDI</p>
                                    <Link to="/car"><Button>Rezerviraj</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <div class = "container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col">
                        <Pagination>
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next />
                        </Pagination>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                

        </div>
    );
}

export default Offer;