import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

function AddNewCar() {
    return(
        <div class = "content">
            <section className = "section">
                <div className = "container col-md-6">
                    <div className = "card shadow">
                        <div className = "card-body">
                            <div className = "row">
                                <div className = "col-md-12">
                                    <h6>Dodaj Novu Rezervaciju</h6>
                                    <hr />
                                    <div className = "row">
                                    <div className = "col-md-6">
                                    <div class = "col-xs-1" align = "center"><h5>Datum Preuzimanja</h5></div>
                                    <div class = "col" align = "center">
                                    <DatePickerComponent placeholder = "Unesi datum"></DatePickerComponent>
                                    </div>
                                </div>
                                <div className = "col-md-6">
                                <div class = "col-xs-1" align = "center"><h5>Datum Vraćanja</h5></div>
                                <div class = "col" align = "center">
                                    <DatePickerComponent placeholder = "Unesi datum"></DatePickerComponent>
                                    </div>
                                </div>
                                </div>
                                    </div>

                                    <div class ="row">
                                    <div className = "form-group col">
                                        <label className = "mb-1">Automobil</label>
                                        <input type = "text" className = "form-control" placeholder = "Odaberi Automobil" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Korisnik</label>
                                        <input type = "text" className = "form-control" placeholder = "Odaberi Korisnika" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Cijena</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Cijenu" />
                                    </div>
                                    <section>
                                        <hr />
                                    </section>
                                    <div className = "form-group py-3">
                                        <button type = "button" className = "btn btn-primary shadow w-100">Dodaj</button>
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