/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const bodyTypesServices = {
	getBodyTypes,
	createBodyType,
	updateBodyType,
};

async function getBodyTypes() {
	return axios
		.get(`${apiURL}/body-types`)
		.then(res => res)
		.catch(err => err.response);
}

async function createBodyType(bodyType) {
	return axios
		.post(`${apiURL}/body-types`, { bodyType })
		.then(res => res)
		.catch(err => err.response);
}

async function updateBodyType(id, bodyType) {
	return axios
		.patch(`${apiURL}/body-types/${id}`, {
			bodyType,
		})
		.then(res => res)
		.catch(err => err.response);
}
