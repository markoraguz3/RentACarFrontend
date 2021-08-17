import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" class = "navbar-brand">Rent a car</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/" class = "nav-link active">Početna</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class = "nav-link active">Ponuda Vozila</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class = "nav-link active">Kontakt</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/signup" class = "nav-link active">Registriraj se</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
            );
}

export default Navbar;