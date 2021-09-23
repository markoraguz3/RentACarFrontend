/** @format */

import React from 'react';
import BrandNameInput from './Inputs/BrandNameInput';
import ModelNameInput from './Inputs/ModelNameInput';
import FuelTypeInput from './Inputs/FuelTypeInput';
import BodyTypeInput from './Inputs/BodyTypeInput';
import PriceDayInput from './Inputs/PriceDayInput';
import SeatsNumberInput from './Inputs/SeatsNumberInput';
import DoorsNumberInput from './Inputs/DoorsNumberInput';
import EnginePowerInput from './Inputs/EnginePowerInput';
import EngineCapacityInput from './Inputs/EngineCapacityInput';
import ImageInput from './Inputs/ImageInput';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { carsServices } from '../../../services/cars.services';
import { useHistory } from 'react-router';

function AddNewCar() {
	const { userId } = useContext(AuthContext);
	const history = useHistory();

	const user = JSON.parse(localStorage.getItem('userObj'));
	console.log(user);
	const [carData, setCarData] = useState({
		brandId: null,
		brandName: null,
		modelId: null,
		modelName: null,
		fuelTypeId: null,
		fuelTypeName: null,
		bodyTypeId: null,
		bodyTypeName: null,
		seatsNum: null,
		doorsNum: null,
		priceDay: null,
		images: null,
		enginePower: null,
		engineCapacity: null,
		userId: userId,
		userName: user.firstName + ' ' + user.lastName,
	});
	const handleSubmit = () => {
		console.log(carData);
		carsServices
			.createCar({
				brandId: carData.brandId,
				brandName: carData.brandName,
				modelId: carData.modelId,
				modelName: carData.modelName,
				fuelTypeId: carData.fuelTypeId,
				fuelTypeName: carData.fuelTypeName,
				bodyTypeId: carData.bodyTypeId,
				bodyTypeName: carData.bodyTypeName,
				seatsNum: carData.seatsNum,
				doorsNum: carData.doorsNum,
				priceDay: carData.priceDay,
				images: carData.images,
				enginePower: carData.enginePower,
				engineCapacity: carData.engineCapacity,
				userId: carData.userId,
				userName: carData.userName,
			})
			.then(res => history.push('/offer'))
			.catch(err => console.log(err));
	};

	return (
		<div class='content'>
			<section className='section'>
				<div className='container col-md-6'>
					<div className='card shadow'>
						<div className='card-body'>
							<div className='row'>
								<div className='col-md-12'>
									<h6>Dodaj Novo Auto</h6>
									<hr />
									<div className='row'>
										<BrandNameInput carData={carData} setCarData={setCarData} />
										<ModelNameInput carData={carData} setCarData={setCarData} />
										<FuelTypeInput carData={carData} setCarData={setCarData} />
									</div>
									<div class='row'>
										<BodyTypeInput carData={carData} setCarData={setCarData} />
										<SeatsNumberInput
											carData={carData}
											setCarData={setCarData}
										/>
										<DoorsNumberInput
											carData={carData}
											setCarData={setCarData}
										/>
									</div>
									<div className='row'>
										<EnginePowerInput
											carData={carData}
											setCarData={setCarData}
										/>
										<EngineCapacityInput
											carData={carData}
											setCarData={setCarData}
										/>
										<PriceDayInput carData={carData} setCarData={setCarData} />
									</div>
									<div className='row'>
										<ImageInput carData={carData} setCarData={setCarData} />
									</div>
									<section>
										<hr />
									</section>
									<div className='form-group py-3'>
										<input
											type='submit'
											className='btn btn-primary shadow w-100'
											onClick={handleSubmit}
										/>
									</div>
									<div className='col-md-6'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AddNewCar;
