/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const brandsServices = { getBrands, createBrand, updateBrand };

async function getBrands() {
	return axios
		.get(`${apiURL}/car-brands`)
		.then(res => res)
		.catch(err => err.response);
}

async function createBrand(brandName) {
	return axios
		.post(`${apiURL}/car-brands`, { brandName })
		.then(res => res)
		.catch(err => err.response);
}

async function updateBrand(id, brandName) {
	return axios
		.patch(`${apiURL}/car-brands/${id}`, {
			brandName,
		})
		.then(res => res)
		.catch(err => err.response);
}
