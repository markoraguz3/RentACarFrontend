/** @format */

import React, { useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Roles } from '../../Config/Roles';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { authServices } from '../../services/auth.services';
import { useForm } from 'react-hook-form';

function Signup() {
	const [error, setError] = useState('');
	const { isLogged } = useContext(AuthContext);
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		const loginData = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
			birthDate: data.birthDate,
			roleId: data.role,
		};
		authServices
			.register(loginData)
			.then(res => {
				if (res.status === 200) {
					console.log(res.data);

					history.push('/');
				} else {
					console.log(res);
					setError(res.data);
				}
			})
			.catch(err => console.log(err));
	};

	return isLogged ? (
		<Redirect to='/offer' />
	) : (
		<div class='content'>
			<section className='section'>
				<div className='container col-md-4'>
					<div className='card shadow'>
						<div className='card-body'>
							<div className='row'>
								<form onSubmit={handleSubmit(onSubmit)} className='col-md-12'>
									<div className='col-md-12'>
										<h6>Registriraj se</h6>
										<hr />
										<div className='row'>
											<div className='form-group col'>
												<label className='mb-1'>Ime</label>
												<input
													type='text'
													className='form-control'
													placeholder='Unesi Ime'
													{...register('firstName', {
														required: true,
														minLength: 3,
														maxLength: 20,
													})}
												/>
											</div>
											<div className='form-group col'>
												<label className='mb-1'>Prezime</label>
												<input
													type='text'
													className='form-control'
													placeholder='Unesi Prezime'
													{...register('lastName', {
														required: true,
														minLength: 3,
														maxLength: 20,
													})}
												/>
											</div>
										</div>
										<div className='form-group'>
											<label className='mb-1'>Email</label>
											<input
												type='text'
												className='form-control'
												placeholder='Unesi Email'
												{...register('email', {
													required: true,
													minLength: 7,
													maxLength: 20,
												})}
											/>
										</div>
										<div className='form-group'>
											<label>Datum rođenja</label>
											<DatePickerComponent
												{...register('birthDate', {
													required: true,
												})}
												placeholder='Unesi datum'></DatePickerComponent>
										</div>

										{/* <div className="form-group">
                                 <label className="mb-1">Telefonski Broj</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Unesi Telefonski broj"
                                 />
                              </div> */}
										<div className='form-group'>
											<label className='mb-1'>Lozinka</label>
											<input
												type='password'
												className='form-control'
												placeholder='Unesi Lozinku'
												{...register('password', {
													required: true,
													minLength: 5,
													maxLength: 20,
												})}
											/>
										</div>
										<div className='form-group mt-2'>
											<label>Registriraj se kao</label>
											<div className='my-2'>
												<div class='form-check form-check-inline'>
													<input
														class='form-check-input'
														type='radio'
														name='role'
														value={Roles.Kupac}
														{...register('role', {
															required: true,
														})}
													/>
													<label class='form-check-label' for='inlineRadio1'>
														Kupac
													</label>
												</div>
												<div class='form-check form-check-inline'>
													<input
														class='form-check-input'
														type='radio'
														name='role'
														value={Roles.Prodavac}
														{...register('role')}
													/>
													<label class='form-check-label' for='inlineRadio2'>
														Prodavač
													</label>
												</div>
											</div>
											<p style={{ color: 'red' }}>{error}</p>
										</div>
										<div className='form-group py-2'>
											<Link to='/'>Već imaš korisnički račun? Prijavi se.</Link>
										</div>
										<div className='form-group py-3'>
											<input
												type='submit'
												className='btn btn-primary shadow w-100'
											/>
										</div>
										<div className='col-md-6'></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Signup;
