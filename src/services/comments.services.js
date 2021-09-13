/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const commentServices = { getComments, createComment };

async function getComments(carId) {
	return axios
		.get(`${apiURL}/comments`, {
			params: {
				carId,
			},
		})
		.then(res => res)
		.catch(err => err.response);
}

async function createComment({ text, userName, userId, carId }) {
	return axios
		.post(`${apiURL}/comments`, {
			text,
			userName,
			userId,
			carId,
		})
		.then(res => res)
		.catch(err => err.response);
}
