/** @format */

import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import BodyTypeInput from './Inputs/BodyTypeInput';
import BrandNameInput from './Inputs/BrandNameInput';
import FuelTypeInput from './Inputs/FuelTypeInput';
import ModelNameInput from './Inputs/ModelNameInput';
import { Roles } from '../../../Config/Roles';
import { AuthContext } from '../../../Contexts/AuthContext';
import { authServices } from '../../../services/auth.services';
import AllUsersInput from './Inputs/AllUsersInput';
import AllCars from './AllCars';
const AdminPage = () => {
	const { roleId } = useContext(AuthContext);
	const [brandData, setBrandData] = useState({
		id: null,
		name: null,
	});

	return Roles.Admin == roleId ? (
		<div className='content'>
			<section className='section'>
				<div className='container'>
					<h1
						className='mb-3'
						style={{
							textAlign: 'center',
						}}>
						- Admin dashboard -
					</h1>
					<div className='row'>
						<h3
							style={{
								textAlign: 'center',
								marginTop: '2rem',
							}}>
							Podaci sustava
						</h3>
						<BrandNameInput brandData={brandData} setBrandData={setBrandData} />
						<ModelNameInput brandData={brandData} />
						<BodyTypeInput />
						<FuelTypeInput />
						<h3
							style={{
								textAlign: 'center',
								marginTop: '4rem',
							}}>
							Korisnici
						</h3>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<AllUsersInput />
						</div>
						<h3
							style={{
								textAlign: 'center',
								marginTop: '4rem',
							}}>
							Sva auta
						</h3>
						<AllCars />
					</div>
				</div>
			</section>
		</div>
	) : (
		<Redirect to='/' />
	);
};

export default AdminPage;
