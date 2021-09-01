/** @format */

import { apiURL } from '../Config/URL';
import axios from 'axios';

export const reservationsServices = { createReservation };

async function createReservation({
	dateFrom,
	dateTo,
	reservationStatus,
	userId,
	carId,
}) {
	return axios
		.post(`${apiURL}/reservations`, {
			dateFrom,
			dateTo,
			reservationStatus,
			userId,
			carId,
		})
		.then(res => res)
		.catch(err => err.response);
}
