import { apiURL } from "../Config/URL";
import axios from "axios";

export const fuelTypesServices = { getFuelTypes };

async function getFuelTypes() {
   return axios
      .get(`${apiURL}/fuel-types`)
      .then((res) => res)
      .catch((err) => err.response);
}
