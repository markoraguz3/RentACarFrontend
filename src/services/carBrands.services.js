import { apiURL } from "../Config/URL";
import axios from "axios";

export const brandsServices = { getBrands };

async function getBrands() {
   return axios
      .get(`${apiURL}/car-brands`)
      .then((res) => res)
      .catch((err) => err.response);
}
