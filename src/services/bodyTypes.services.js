import { apiURL } from "../Config/URL";
import axios from "axios";

export const bodyTypesServices = { getBodyTypes };

async function getBodyTypes() {
   return axios
      .get(`${apiURL}/body-types`)
      .then((res) => res)
      .catch((err) => err.response);
}
