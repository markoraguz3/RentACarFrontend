/** @format */

import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { bodyTypesServices } from '../../../../services/bodyTypes.services';
import AddModal from '../AddModal';
import UpdateModal from '../UpdateModal';
import SuccessModal from '../../../common/SuccessModal';
const BodyTypeInput = ({}) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showUpdate, setShowUpdate] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const [update, setUpdate] = useState(new Date());
	const [bodyTypeData, setBodyTypeData] = useState({
		id: null,
		name: null,
	});

	useEffect(() => {
		setIsLoading(true);
		bodyTypesServices
			.getBodyTypes()
			.then(res => {
				if (res.status === 200) {
					setOptions(
						res.data.map(x => {
							return {
								value: x._id,
								label: x.bodyType,
							};
						}),
					);
				} else {
					console.log(res);
				}
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [update, bodyTypeData]);

	const onChange = event => {
		if (event) {
			setBodyTypeData({
				id: event.value,
				name: event.label,
			});
		} else {
			setBodyTypeData({
				id: null,
				name: null,
			});
		}
	};

	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<label className='my-2'>Karoserija</label>
			<Select
				isClearable
				options={options}
				onChange={onChange}
				isLoading={isLoading}
			/>
			<button
				type='button'
				disabled={!bodyTypeData.id}
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
				headerText={'Uredite tip karoserije'}
				label={'Karoserija tip'}
				data={bodyTypeData}
				show={showUpdate}
				handleClose={() => {
					setShowUpdate(false);
				}}
				handleAction={(id, bodyType) => {
					bodyTypesServices
						.updateBodyType(id, bodyType)
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
				headerText={'Dodajte tip karoserije'}
				label={'Karoserija tip'}
				show={showAdd}
				handleClose={() => {
					setShowAdd(false);
				}}
				handleAction={bodyType => {
					bodyTypesServices
						.createBodyType(bodyType)
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
				successMsg={'Uspješno ste dodali novu karoseriju'}
				show={showSuccessModal}
				handleClose={() => {
					setShowSuccessModal(false);
				}}
			/>
		</div>
	);
};

export default BodyTypeInput;
