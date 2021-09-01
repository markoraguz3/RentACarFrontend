/** @format */

import React, { useEffect, useState } from 'react';
import slika1 from '../../images/slika2.PNG';
import { carsServices } from '../../../services/cars.services';
import { useParams } from 'react-router-dom';
import Reservation from './Reservation';
import Comments from './Comments';

function Car() {
	const { id } = useParams();
	const [carData, setCarData] = useState({});

	useEffect(() => {
		carsServices
			.getSingleCar(id)
			.then(res => {
				if (res.status === 200) {
					setCarData(res.data);
				}
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='content'>
			<section className='section'>
				<div className='container'>
					<div className='card shadow'>
						<div className='card-body'>
							<div className='row'>
								<div className='col-md-6'>
									<h6>Cijena dan</h6> {carData.priceDay}.00 KM
									<hr />
									<div className='form-group'>
										<label className='mb-1'>
											<b>Proizvođač:</b> {carData.brandName}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Model:</b> {carData.modelName}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Tip goriva:</b> {carData.fuelTypeName}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Karoserija:</b> {carData.bodyTypeName}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Broj vrata:</b> {carData.doorsNum}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Broj sjedala:</b> {carData.seatsNum}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Zapremina motora:</b> {carData.engineCapacity}
										</label>
									</div>
									<div className='form-group'>
										<label className='mb-1'>
											<b>Snaga motora:</b> {carData.enginePower}
										</label>
									</div>
								</div>

								<div className='col-md-6'>
									<img
										src={'http://localhost:3500/uploads/' + carData.images}
										height={300}
										className='w-100 border-bottom'
										alt='Slika'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Reservation carId={carData._id} />
			<Comments />
		</div>
	);
}

export default Car;
