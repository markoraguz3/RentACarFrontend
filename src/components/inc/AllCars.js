import react from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'reactstrap';
import slika1 from '../images/slika2.PNG';
import Pagination from 'react-bootstrap/Pagination';

function AllCars() {
    return(
        <div class =" content">
           <section className ="section border-top">
          <div className="container">
                    <div className="row">
                        <div className ="col-md-12 mb-4 text-center">
                            <h3 className = "main-heading">Pregled Auta</h3>
                            <Link to = "/AddNewCar"><Button>Dodaj Novo Auto</Button></Link>
                            <div className ="underline mx-auto"></div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
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
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4 margin-bottom">
                            <div className = "card shadow">
                                <img src = {slika1} className = "w-100 border-bottom" alt="Slika" />
                                <div className = "card-body">
                                    <h6>Rent a car</h6>
                                    <div className = "underline"></div>
                                    <p>Audi A4 2.0TDI</p>
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
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
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
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
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
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
                                    <Button>Ažuriraj</Button>
                                    <Button variant="outline-danger">Izbriši</Button>
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
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Item>{6}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                

        </div>
    );
}

export default AllCars;