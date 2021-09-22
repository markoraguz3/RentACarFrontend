/** @format */

import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { brandsServices } from '../../../../services/carBrands.services';
import AddModal from '../AddModal';
import UpdateModal from '../UpdateModal';
import SuccessModal from '../../../common/SuccessModal';

const BrandNameInput = ({ brandData, setBrandData }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showUpdate, setShowUpdate] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [update, setUpdate] = useState(new Date());
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		brandsServices
			.getBrands()
			.then(res => {
				if (res.status === 200) {
					setOptions(
						res.data.map(x => {
							return {
								value: x._id,
								label: x.brandName,
							};
						}),
					);
				} else {
					console.log(res);
				}
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [update, brandData]);

	const onChange = event => {
		console.log(event);
		if (event) {
			setBrandData({
				id: event.value,
				name: event.label,
			});
		} else {
			setBrandData({
				id: null,
				name: null,
			});
		}
	};
	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<label className='my-2'>Marka auta</label>
			<Select
				options={options}
				isClearable
				isLoading={isLoading}
				onChange={onChange}
			/>
			<button
				type='button'
				disabled={!brandData.id}
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
				headerText={'Uredite marku automobila'}
				label={'Marka'}
				show={showUpdate}
				data={brandData}
				handleClose={() => {
					setShowUpdate(false);
				}}
				handleAction={(id, brandName) => {
					brandsServices
						.updateBrand(id, brandName)
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
				headerText={'Dodajte marku automobila'}
				label={'Marka'}
				show={showAdd}
				handleClose={() => {
					setShowAdd(false);
				}}
				handleAction={brandName => {
					brandsServices
						.createBrand(brandName)
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
				successMsg={'Uspješno ste dodali novu marku automobila'}
				show={showSuccessModal}
				handleClose={() => {
					setShowSuccessModal(false);
				}}
			/>
		</div>
	);
};

export default BrandNameInput;
