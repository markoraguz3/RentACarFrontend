import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { authServices } from "../../services/auth.services";


function Login() {
   const [error, setError] = useState("");
   const { login, isLogged } = useContext(AuthContext);
   const history = useHistory();

   useEffect(() => {
      if (isLogged) history.push("/offer");
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      const loginData = {
         email: data.email,
         password: data.password,
      };
      authServices
         .login(loginData)
         .then((res) => {
            if (res.status === 200) {
               console.log(res.data);
               const token = res.data.token;
               const userId = res.data.userId;
               const roleId = res.data.roleId;
               login(token, userId, roleId);
               history.push("/offer");
            } else {
               setError(res.data);
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <div class="content">
         <section className="section">
            <div className="container col-md-4">
               <div className="card shadow">
                  <div className="card-body">
                     <div className="row">
                        <form
                           onSubmit={handleSubmit(onSubmit)}
                           className="col-md-12"
                        >
                           <h6>Prijavi se</h6>
                           <hr />
                           <div className="form-group">
                              <label className="mb-1">Email</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Unesi Email"
                                 {...register("email", {
                                    required: true,
                                    minLength: 7,
                                    maxLength: 20,
                                 })}
                              />
                              {errors?.email && "Last name is required"}
                           </div>
                           <div className="form-group">
                              <label className="mb-1">Lozinka</label>
                              <input
                                 type="password"
                                 className="form-control"
                                 placeholder="Unesi Lozinku"
                                 {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                 })}
                              />
                           </div>
                           <div className="form-group py-2">
                              <Link to="/signup">
                                 Nemaš korisnički račun? Registriraj se.
                              </Link>
                           </div>
                           {error && <p style={{ color: "red" }}>{error}</p>}
                           <div className="form-group py-3">
                           <input
                                 type="submit"
                                 className="btn btn-primary shadow w-100"
                              />
                           </div>
                           <div className="col-md-6"></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Login;
