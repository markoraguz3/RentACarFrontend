import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return(
        <div class = "content">
           <section className = "section">
                <div className = "container col-md-4">
                    <div className = "card shadow">
                        <div className = "card-body">
                            <div className = "row">
                                <div className = "col-md-12">
                                    <h6>Registriraj se</h6>
                                    <hr />
                                    <div className = "row">
                                    <div className = "form-group col">
                                        <label className = "mb-1">Ime</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Ime" />
                                    </div>
                                    <div className = "form-group col">
                                        <label className = "mb-1">Prezime</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Prezime" />
                                    </div>
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Email</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Email" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Telefonski Broj</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Telefonski broj" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Lozinka</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Lozinku" />
                                    </div>
                                    <div className = "form-group py-2"> 
                                    <Link to= "/login">Već imaš korisnički račun? Prijavi se.</Link>
                                    </div>
                                    <div className = "form-group py-3">
                                        <button type = "button" className = "btn btn-primary shadow w-100">Registriraj se </button>
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

export default Signup;