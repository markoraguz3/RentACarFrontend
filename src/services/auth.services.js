import { apiURL } from "../Config/URL";
import axios from "axios";

export const authServices = {
   login,
   register,
};

async function login({ email, password }) {
   return axios
      .post(`${apiURL}/auth/login`, { email, password })
      .then((res) => res)
      .catch((err) => err.response);
}

async function register({
   firstName,
   lastName,
   birthDate,
   email,
   password,
   roleId,
}) {
   return axios
      .post(`${apiURL}/auth/register`, {
         firstName,
         lastName,
         birthDate,
         email,
         password,
         roleId,
      })
      .then((res) => res)
      .catch((err) => err.response);
}
