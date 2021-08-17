import React from 'react';

function Contactus() {
    return(
        <div>
            <section className = "section">
                <div className = "container">
                    <div className = "card shadow">
                        <div className = "card-body">
                            <div className = "row">
                                <div className = "col-md-6">
                                    <h6>Kontaktiraj nas</h6>
                                    <hr />
                                    <div className = "form-group">
                                        <label className = "mb-1">Ime</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Ime" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Prezime</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Prezime" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Email</label>
                                        <input type = "text" className = "form-control" placeholder = "Unesi Email" />
                                    </div>
                                    <div className = "form-group">
                                        <label className = "mb-1">Poruka</label>
                                        <textarea rows = "3" className = "form-control" placeholder = "Napiši poruku..."></textarea>
                                    </div>
                                    <div className = "form-group py-3">
                                        <button type = "button" className = "btn btn-primary shadow w-100">Pošalji</button>
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

export default Contactus;