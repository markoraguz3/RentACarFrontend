/** @format */

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { reservationsServices } from '../../../services/reservation.services';
import { AuthContext } from '../../../Contexts/AuthContext';
const Reservation = ({ carId }) => {
	const { userId } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [error, setError] = useState();

	const onSubmit = data => {
		if (data.dateFrom < data.dateTo) {
			reservationsServices
				.createReservation({
					dateFrom: data.dateFrom,
					dateTo: data.dateTo,
					reservationStatus: 'Na čekanju',
					userId: userId,
					carId: carId,
				})
				.then(res => console.log(res))
				.catch(err => console.log('err', err));
		} else {
			setError('Datum preuzimanja mora biti manji od datuma vraćanja.');
		}
	};
	return (
		<section className='section'>
			<div className='container'>
				<div className='card shadow'>
					<div className='card-body'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='row'>
								<div class='col-xs-1' align='center'>
									<h4>Rezervacija</h4>
								</div>
								<hr />
								<div className='col-md-6'>
									<div class='col-xs-1' align='center'>
										<h5>Datum Preuzimanja</h5>
									</div>
									<div class='col' align='center'>
										<DatePickerComponent
											placeholder='Unesi datum'
											{...register('dateFrom')}></DatePickerComponent>
									</div>
								</div>
								<div className='col-md-6'>
									<div class='col-xs-1' align='center'>
										<h5>Datum Vraćanja</h5>
									</div>
									<div class='col' align='center'>
										<DatePickerComponent
											placeholder='Unesi datum'
											{...register('dateTo')}></DatePickerComponent>
									</div>
								</div>
								<p style={{ color: 'red' }}>{error}</p>
							</div>
							<div className='form-group py-3'>
								<input type='submit' className='btn btn-primary shadow w-100' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
