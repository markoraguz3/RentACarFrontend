import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4">
                        <h6>Informacije</h6>
                        <hr />
                        <p>tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                    </div>
                    <div className = "col-md-4">
                        <h6>Linkovi</h6>
                        <hr />
                        <div><Link to ="/">Početna</Link></div>
                        <div><Link to ="/about">Ponuda vozila</Link></div>
                        <div><Link to ="/contact">Kontakt</Link></div>
                        <div><Link to ="/signup">Registriraj se</Link></div>
                    </div>
                    <div className = "col-md-4">
                        <h6>Kontakt informacije</h6>
                        <hr />
                        <div><p className = "text-white mb-1"> Kneza Višeslava 8, Mostar</p></div>
                        <div><p className = "text-white mb-1"> 063555111</p></div>
                        <div><p className = "text-white mb-1"> 063559874</p></div>
                        <div><p className = "text-white mb-1"> rentacar@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;