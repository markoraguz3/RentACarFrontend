import { apiURL } from "../Config/URL";
import axios from "axios";

export const modelServices = { getModels };

async function getModels({ brandId }) {
   return axios
      .get(`${apiURL}/brand-models`, { params: { brandId } })
      .then((res) => res)
      .catch((err) => err.response);
}
