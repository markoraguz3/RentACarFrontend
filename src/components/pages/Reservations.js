/** @format */

import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Roles } from '../../Config/Roles';
import { AuthContext } from '../../Contexts/AuthContext';
import { reservationsServices } from '../../services/reservation.services';

function Reservations() {
	const [reservations, setReservations] = useState([]);
	const [update, setUpdate] = useState(new Date());
	var user = JSON.parse(localStorage.getItem('userObj'));
	useEffect(() => {
		reservationsServices
			.getReservations()
			.then(res => setReservations(res.data))
			.catch(err => console.log(err));
	}, [update]);

	const changeReservationStatus = (id, status) => {
		reservationsServices
			.updateReservation(id, status)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		setUpdate(new Date());
	};
	return (
		<div class=' content'>
			<div class='container'>
				<table class='table mt-5'>
					<thead>
						<tr>
							<th scope='col'>Datum od</th>
							<th scope='col'>Datum do</th>
							<th scope='col'>Automobil</th>
							<th scope='col'>Cijena/Dan</th>
							<th scope='col'>Korisnik</th>
							<th scope='col'>Status</th>
							<hr />
						</tr>
					</thead>
					<tbody>
						{reservations.length > 0
							? reservations.map(x => {
									let textColor = 'black';
									if (x.reservationStatus === 'Na čekanju') {
										textColor = 'orange';
									} else if (x.reservationStatus === 'Potvrđeno') {
										textColor = 'green';
									} else {
										textColor = 'red';
									}
									return (
										<tr>
											<td>{x.dateFrom.slice(0, 10)}</td>
											<td>{x.dateTo.slice(0, 10)}</td>
											<td>{x.carBrand + ' ' + x.carModel}</td>
											<td>{x.price}</td>
											{Roles.Kupac == user.roleId && <td>{x.ownerName}</td>}
											{Roles.Prodavac == user.roleId && <td>{x.userName}</td>}
											<td style={{ color: textColor }}>
												{x.reservationStatus}
											</td>
											{Roles.Prodavac == user.roleId &&
												x.reservationStatus == 'Na čekanju' && (
													<td>
														<Button
															variant='success mx-2'
															onClick={() =>
																changeReservationStatus(x._id, 'Potvrđeno')
															}>
															Potvrdi
														</Button>
														<Button
															variant='outline-danger'
															onClick={() =>
																changeReservationStatus(x._id, 'Odbijeno')
															}>
															Odbij
														</Button>
													</td>
												)}
										</tr>
									);
							  })
							: 'Nema rezervacija'}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Reservations;
