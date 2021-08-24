import react from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Reservations() {
   return (
      <div class=" content">
         <div class="container">
            <div class="row">
               <div class="col-sm">
                  <div class="button-prodavac">
                     <a
                        href="/prodavac"
                        class="btn btn-primary btn-md"
                        role="button"
                     >
                        Nazad
                     </a>
                  </div>
               </div>
            </div>
            <a
               href="/newreservation"
               class="btn btn-primary btn-md"
               role="button"
            >
               Dodaj Novu Rezervaciju
            </a>
            <table class="table">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Datum od</th>
                     <th scope="col">Datum do</th>
                     <th scope="col">Automobil</th>
                     <th scope="col">Korisnik</th>
                     <th scope="col">Cijena</th>

                     <hr />
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td>1.1.2020</td>
                     <td>4.2.2020</td>
                     <td>Audi A4</td>
                     <td>Marko</td>
                     <td>300</td>
                     <th scope="col">
                        <Button variant="success">Potvrdi</Button>
                     </th>
                     <th scope="col">
                        <Button variant="outline-danger">Izbriši</Button>
                     </th>
                  </tr>
                  <tr>
                     <th scope="row">2</th>
                     <td>1.1.2020</td>
                     <td>4.2.2020</td>
                     <td>Audi A4</td>
                     <td>Marko</td>
                     <td>300</td>
                     <th scope="col">
                        <Button variant="success">Potvrdi</Button>
                     </th>
                     <th scope="col">
                        <Button variant="outline-danger">Izbriši</Button>
                     </th>
                  </tr>
                  <tr>
                     <th scope="row">3</th>
                     <td>1.1.2020</td>
                     <td>4.2.2020</td>
                     <td>Audi A4</td>
                     <td>Marko</td>
                     <td>300</td>
                     <th scope="col">
                        <Button variant="success">Potvrdi</Button>
                     </th>
                     <th scope="col">
                        <Button variant="outline-danger">Izbriši</Button>
                     </th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Reservations;
