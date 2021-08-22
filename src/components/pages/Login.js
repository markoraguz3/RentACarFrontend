import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Login() {
    return(
        <div class = "content">
           <section className = "section">
                <div className = "container col-md-4">
                    <div className = "card shadow">
                        <div className = "card-body">
                            <div className = "row">
                                <div className = "col-md-12">
                                    <h6>Prijavi se</h6>
                                    <hr />
                                    <div className = "form-group">
                                        <label className = "mb-1">Email</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Email" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Lozinka</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Lozinku" />
                                    </div>
                                    <div className = "form-group py-2"> 
                                    <Link to= "/signup">Nemaš korisnički račun? Registriraj se.</Link>
                                    </div>
                                    <div className = "form-group py-3">
                                        <button type = "button" className = "btn btn-primary shadow w-100">Prijavi se </button>
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

export default Login;