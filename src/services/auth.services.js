import { apiURL } from "../Config/URL";
import axios from "axios";

export const authServices = {
   login,
};

async function login({ email, password }) {
   return axios
      .post(`${apiURL}/auth/login`, { email, password })
      .then((res) => res)
      .catch((err) => err.response);
}
