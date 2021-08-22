import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddNewCar() {
    return(
        <div class = "content">
            <section className = "section">
                <div className = "container col-md-6">
                    <div className = "card shadow">
                        <div className = "card-body">
                            <div className = "row">
                                <div className = "col-md-12">
                                    <h6>Dodaj Novo Auto</h6>
                                    <hr />
                                    <div className = "row">
                                    <div className = "form-group col">
                                        <label className = "mb-1">Proizvođač</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Ime Proizvođača" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Model</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Model" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Tip</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Tip" />
                                    </div>
                                    </div>
                                    <div class ="row">
                                    <div className = "form-group col">
                                        <label className = "mb-1">Zapremina Motora</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Zapreminu Motora" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Snaga Motora</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Snagu Motora" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Broj Vrata</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Broj Vrata" />
                                    </div>
                                    </div>
                                    <div className = "row">
                                    <div className = "form-group col">
                                        <label className = "mb-1">Broj Sjedala</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Broj Sjedala" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Gorivo</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Gorivo" />
                                    </div>
                                    </div>
                                    <section>
                                        <hr />
                                        <form> 
                                        </form>
                                    </section>
                                    <div className = "form-group py-3">
                                        <button type = "button" className = "btn btn-primary shadow w-100">Dodaj Novo </button>
                                    </div>
                                    <div className = "col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default AddNewCar;