/** @format */

import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { modelServices } from '../../../../services/brandModel.services';
import AddModal from '../AddModal';
import UpdateModal from '../UpdateModal';
import SuccessModal from '../../../common/SuccessModal';

const ModelNameInput = ({ brandData }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [update, setUpdate] = useState(new Date());

	const [modelData, setModelData] = useState({
		id: null,
		name: null,
	});

	useEffect(() => {
		setIsLoading(true);
		modelServices
			.getModels({ brandId: brandData.id })
			.then(res => {
				if (res.status === 200) {
					setOptions(
						res.data.map(x => {
							return {
								value: x._id,
								label: x.modelName,
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
		if (event) {
			setModelData({
				id: event.value,
				name: event.label,
			});
		} else {
			setModelData({
				id: null,
				name: null,
			});
		}
	};

	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<label className='my-2'>Model auta</label>
			<Select
				options={options}
				isDisabled={!brandData.id}
				isClearable
				isLoading={isLoading}
				onChange={onChange}
			/>
			<button
				type='button'
				disabled={!modelData.id}
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
				disabled={!brandData.id}
				onClick={() => {
					setShowAdd(true);
				}}>
				Dodaj novo
			</button>
			<UpdateModal
				headerText={'Uredite model automobila'}
				label={'Model'}
				show={showUpdate}
				data={modelData}
				handleClose={() => {
					setShowUpdate(false);
				}}
				handleAction={(id, modelName) => {
					modelServices
						.updateModel(id, modelName, brandData.id)
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
				headerText={'Dodajte model automobila'}
				label={'Model'}
				show={showAdd}
				handleClose={() => {
					setShowAdd(false);
				}}
				handleAction={modelName => {
					modelServices
						.createModel(modelName, brandData.id)
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
				successMsg={'Uspješno ste dodali novi model'}
				show={showSuccessModal}
				handleClose={() => {
					setShowSuccessModal(false);
				}}
			/>
		</div>
	);
};

export default ModelNameInput;
