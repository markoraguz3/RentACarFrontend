/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const modelServices = { getModels, createModel, updateModel };

async function getModels({ brandId }) {
	return axios
		.get(`${apiURL}/brand-models`, { params: { brandId } })
		.then(res => res)
		.catch(err => err.response);
}

async function createModel(modelName, brandId) {
	return axios
		.post(`${apiURL}/brand-models`, { modelName, brandId })
		.then(res => res)
		.catch(err => err.response);
}

async function updateModel(id, modelName, brandId) {
	return axios
		.patch(`${apiURL}/brand-models/${id}`, {
			modelName,
			brandId,
		})
		.then(res => res)
		.catch(err => err.response);
}
