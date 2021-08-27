import { apiURL } from "../Config/URL";
import axios from "axios";

export const carsServices = { getCars };

async function getCars({ roleId, userId }) {
   return axios
      .get(`${apiURL}/cars`, { params: { roleId, userId } })
      .then((res) => res)
      .catch((err) => err.response);
}
