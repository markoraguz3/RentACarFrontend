import { apiURL } from "../Config/URL";
import axios from "axios";
import FormData from "form-data";

export const carsServices = { getCars, getSingleCar, createCar };

async function getCars({
   roleId,
   userId,
   brandId,
   modelId,
   bodyTypeId,
   fuelTypeId,
   pageIndex,
}) {
   return axios
      .get(`${apiURL}/cars`, {
         params: {
            roleId,
            userId,
            brandId,
            modelId,
            bodyTypeId,
            fuelTypeId,
            pageIndex,
         },
      })
      .then((res) => res)
      .catch((err) => err.response);
}

async function getSingleCar(carId) {
   return axios
      .get(`${apiURL}/cars/${carId}`)
      .then((res) => res)
      .catch((err) => err.response);
}

async function createCar({
   brandId,
   brandName,
   modelId,
   modelName,
   fuelTypeId,
   fuelTypeName,
   bodyTypeId,
   bodyTypeName,
   seatsNum,
   doorsNum,
   priceDay,
   enginePower,
   engineCapacity,
   userId,
   userName,
   images,
}) {
   const formData = new FormData();
   formData.append("carImage", images);

   formData.append("brandId", brandId);
   formData.append("brandName", brandName);
   formData.append("modelId", modelId);
   formData.append("modelName", modelName);
   formData.append("fuelTypeId", fuelTypeId);
   formData.append("fuelTypeName", fuelTypeName);
   formData.append("bodyTypeId", bodyTypeId);
   formData.append("bodyTypeName", bodyTypeName);
   formData.append("seatsNum", seatsNum);
   formData.append("doorsNum", doorsNum);
   formData.append("priceDay", priceDay);
   formData.append("enginePower", enginePower);
   formData.append("engineCapacity", engineCapacity);
   formData.append("userId", userId);
   formData.append("userName", userName);

   return axios
      .post(`${apiURL}/cars`, formData)
      .then((res) => res)
      .catch((err) => err.response);
}
