/** @format */

import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import BodyTypeInput from './Inputs/BodyTypeInput';
import BrandNameInput from './Inputs/BrandNameInput';
import FuelTypeInput from './Inputs/FuelTypeInput';
import ModelNameInput from './Inputs/ModelNameInput';
import { Roles } from '../../../Config/Roles';
import { AuthContext } from '../../../Contexts/AuthContext';
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
					<h1 className='mb-3'>Admin dashboard</h1>
					<div className='row'>
						<BrandNameInput brandData={brandData} setBrandData={setBrandData} />
						<ModelNameInput brandData={brandData} />
						<BodyTypeInput />
						<FuelTypeInput />
					</div>
				</div>
			</section>
		</div>
	) : (
		<Redirect to='/' />
	);
};

export default AdminPage;
