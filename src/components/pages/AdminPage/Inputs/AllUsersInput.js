/** @format */

import { useEffect, useState } from 'react';
import { authServices } from '../../../../services/auth.services';
import Select from 'react-select';
import SuccessModal from '../../../common/SuccessModal';
import ConfirmModal from '../../../common/ConfirmModal';

const AllUsersInput = () => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showConfirm, setShowConfirm] = useState(false);
	const [update, setUpdate] = useState(new Date());
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [userData, setUserData] = useState({
		id: null,
		name: null,
	});

	useEffect(() => {
		authServices
			.getAllUsers()
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					const newData = res.data.filter(x => x.roleId != 3);
					setOptions(
						newData.map(x => {
							return {
								value: x._id,
								label: x.firstName + ' ' + x.lastName + ' - ' + x.email,
							};
						}),
					);
				} else {
					console.log(res);
				}
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [update]);

	const onChange = event => {
		if (event) {
			setUserData({
				id: event.value,
				name: event.label,
			});
		} else {
			setUserData({
				id: null,
				name: null,
			});
		}
	};

	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<Select
				options={options}
				isClearable
				isLoading={isLoading}
				onChange={onChange}
			/>
			<button
				type='button'
				disabled={!userData.id}
				style={{ width: '100%' }}
				class='btn btn-danger btn-sm btn-block mt-3 mb-2'
				onClick={() => {
					setShowConfirm(true);
				}}>
				Izbriši
			</button>

			<SuccessModal
				successMsg={'Uspješno ste obrisali ' + userData.name}
				show={showSuccessModal}
				handleClose={() => {
					setShowSuccessModal(false);
				}}
			/>
			<ConfirmModal
				show={showConfirm}
				handleClose={() => {
					setShowConfirm(false);
				}}
				msg='Želite li obrisati usera?'
				handleAction={() => {
					authServices
						.removeUser(userData.id)
						.then(res => {
							setShowConfirm(false);
							setShowSuccessModal(true);
							setUpdate(new Date());
						})
						.catch(err => console.log(err));
				}}
			/>
		</div>
	);
};

export default AllUsersInput;
