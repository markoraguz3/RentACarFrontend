/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const fuelTypesServices = {
	getFuelTypes,
	createFuelType,
	updateFuelType,
};

async function getFuelTypes() {
	return axios
		.get(`${apiURL}/fuel-types`)
		.then(res => res)
		.catch(err => err.response);
}
async function createFuelType(fuelType) {
	return axios
		.post(`${apiURL}/fuel-Types`, { fuelType })
		.then(res => res)
		.catch(err => err.response);
}

async function updateFuelType(id, fuelType) {
	return axios
		.patch(`${apiURL}/fuel-Types/${id}`, {
			fuelType,
		})
		.then(res => res)
		.catch(err => err.response);
}
