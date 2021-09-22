/** @format */

import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { fuelTypesServices } from '../../../../services/fuelTypes.services';
import AddModal from '../AddModal';
import UpdateModal from '../UpdateModal';
import SuccessModal from '../../../common/SuccessModal';

const FuelTypeInput = ({}) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showUpdate, setShowUpdate] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [update, setUpdate] = useState(new Date());
	const [fuelTypeData, setFuelTypeData] = useState({
		id: null,
		name: null,
	});
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fuelTypesServices
			.getFuelTypes()
			.then(res => {
				if (res.status === 200) {
					setOptions(
						res.data.map(x => {
							return {
								value: x._id,
								label: x.fuelType,
							};
						}),
					);
				} else {
					console.log(res);
				}
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [update, fuelTypeData]);

	const onChange = event => {
		if (event) {
			setFuelTypeData({
				id: event.value,
				name: event.label,
			});
		} else {
			setFuelTypeData({
				id: null,
				name: null,
			});
		}
	};

	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<label className='my-2'>Gorivo</label>
			<Select
				options={options}
				isClearable
				isLoading={isLoading}
				onChange={onChange}
			/>
			<button
				type='button'
				disabled={!fuelTypeData.id}
				style={{ width: '100%' }}
				class='btn btn-primary btn-sm btn-block mt-3 mb-2'
				onClick={() => {
					setShowUpdate(true);
				}}>
				Uredi
			</button>
			<button
				type='button'
				style={{ width: '100%' }}
				class='btn btn-secondary btn-sm btn-block my-1'
				onClick={() => {
					setShowAdd(true);
				}}>
				Dodaj novo
			</button>
			<UpdateModal
				headerText={'Uredite tip goriva'}
				show={showUpdate}
				label={'Tip goriva'}
				handleClose={() => {
					setShowUpdate(false);
				}}
				data={fuelTypeData}
				handleAction={(id, fuelType) => {
					fuelTypesServices
						.updateFuelType(id, fuelType)
						.then(res => {
							console.log(res);
							setUpdate(new Date());
							setShowUpdate(false);
							setShowSuccessModal(true);
						})
						.catch(err => console.log(err));
				}}
			/>
			<AddModal
				headerText={'Dodajte tip goriva'}
				label={'Tip goriva'}
				show={showAdd}
				handleClose={() => {
					setShowAdd(false);
				}}
				handleAction={fuelType => {
					fuelTypesServices
						.createFuelType(fuelType)
						.then(res => {
							console.log(res);
							setUpdate(new Date());
							setShowAdd(false);
							setShowSuccessModal(true);
						})
						.catch(err => console.log(err));
				}}
			/>
			<SuccessModal
				successMsg={'Uspješno ste dodali novi tip goriva'}
				show={showSuccessModal}
				handleClose={() => {
					setShowSuccessModal(false);
				}}
			/>
		</div>
	);
};

export default FuelTypeInput;
