import React from "react";
import slika1 from "../images/slika2.PNG";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

function Car() {
   return (
      <div>
         <section className="section">
            <div className="container">
               <div className="card shadow">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-6">
                           <h6>Ime auta</h6>
                           <hr />
                           <div className="form-group">
                              <label className="mb-1">Proizvođač : </label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Model :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Tip :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Zapremina motora :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Snaga motora : </label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Broj sjedala :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Broj vrata :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Tip mjenjača :</label>
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Gorivo :</label>
                           </div>
                        </div>

                        <div className="col-md-6">
                           <img
                              src={slika1}
                              className="w-100 border-bottom"
                              alt="Slika"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="section">
            <div className="container">
               <div className="card shadow">
                  <div className="card-body">
                     <div className="row">
                        <div class="col-xs-1" align="center">
                           <h4>Rezervacija</h4>
                        </div>
                        <hr />
                        <div className="col-md-6">
                           <div class="col-xs-1" align="center">
                              <h5>Datum Preuzimanja</h5>
                           </div>
                           <div class="col" align="center">
                              <DatePickerComponent placeholder="Unesi datum"></DatePickerComponent>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div class="col-xs-1" align="center">
                              <h5>Datum Vraćanja</h5>
                           </div>
                           <div class="col" align="center">
                              <DatePickerComponent placeholder="Unesi datum"></DatePickerComponent>
                           </div>
                        </div>
                     </div>
                     <div className="form-group py-3">
                        <button
                           type="button"
                           className="btn btn-primary shadow w-100"
                        >
                           Pošalji
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Car;
