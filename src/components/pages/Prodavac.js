import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import slika1 from "../images/slika2.PNG";

function Prodavac() {
   return (
      <div class=" content">
         <section className="section border-top">
            <div className="container">
               <div className="row">
                  <Link to="/reservations">
                     <Button>Pregledaj rezervacije</Button>
                  </Link>
                  <div className="col-md-12 mb-4 text-center">
                     <h3 className="main-heading">Pregled Auta</h3>
                     <Link to="/AddNewCar">
                        <Button>Dodaj Novo Auto</Button>
                     </Link>
                     <div className="underline mx-auto"></div>
                  </div>
                  <div className="col-md-4">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 margin-bottom">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card shadow">
                        <img
                           src={slika1}
                           className="w-100 border-bottom"
                           alt="Slika"
                        />
                        <div className="card-body">
                           <h6>Rent a car</h6>
                           <div className="underline"></div>
                           <p>Audi A4 2.0TDI</p>
                           <Button>Ažuriraj</Button>
                           <Button variant="outline-danger">Izbriši</Button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Prodavac;
