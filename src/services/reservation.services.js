/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const reservationsServices = {
	createReservation,
	getReservations,
	updateReservation,
};

async function getReservations({ roleId, userId, ownerId }) {
	return axios
		.get(`${apiURL}/reservations`, {
			params: {
				roleId,
				userId,
				ownerId,
			},
		})
		.then(res => res)
		.catch(err => err.response);
}

async function createReservation({
	dateFrom,
	dateTo,
	reservationStatus,
	userId,
	userName,
	carId,
	carBrand,
	carModel,
	ownerId,
	ownerName,
	price,
}) {
	return axios
		.post(`${apiURL}/reservations`, {
			dateFrom,
			dateTo,
			reservationStatus,
			userId,
			userName,
			carId,
			carBrand,
			carModel,
			ownerId,
			ownerName,
			price,
		})
		.then(res => res)
		.catch(err => err.response);
}

async function updateReservation(id, reservationStatus) {
	return axios
		.patch(`${apiURL}/reservations/${id}`, { reservationStatus })
		.then(res => res)
		.catch(err => err.response);
}
