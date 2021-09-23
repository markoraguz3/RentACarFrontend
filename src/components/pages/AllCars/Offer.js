/** @format */

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { carsServices } from '../../../services/cars.services';
import { Roles } from '../../../Config/Roles';
import BrandNameInput from './Filters/BrandNameInput';
import ModelNameInput from './Filters/ModelNameInput';
import BodyTypeInput from './Filters/BodyTypeInput';
import FuelTypeInput from './Filters/FuelTypeInput';
import PriceFromInput from './Filters/PriceFromInput';
import PriceToInput from './Filters/PriceToInput';
import ConfirmModal from '../../common/ConfirmModal';

function Offer() {
	const { userId, roleId } = useContext(AuthContext);
	const [update, setUpdate] = useState(new Date());
	const [isLoading, setIsLoading] = useState(true);
	const [filters, setFilters] = useState({
		userId: userId,
		roleId: roleId,
		brandId: null,
		modelId: null,
		bodyTypeId: null,
		fuelTypeId: null,
		priceFrom: 0,
		priceTo: 10000000000,
		pageIndex: null,
	});
	const [maxPage, setMaxPage] = useState(0);
	const [cars, setCars] = useState([]);
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);
	const [currentCar, setCurrentCar] = useState({});

	useEffect(() => {
		setIsLoading(true);
		carsServices
			.getCars({
				roleId: filters.roleId,
				userId: filters.userId,
				brandId: filters.brandId,
				modelId: filters.modelId,
				bodyTypeId: filters.bodyTypeId,
				fuelTypeId: filters.fuelTypeId,
				priceFrom: filters.priceFrom,
				priceTo: filters.priceTo,
				pageIndex: filters.pageIndex,
			})
			.then(res => {
				if (res.status === 200) {
					setCars(res.data.cars);
					setMaxPage(Math.ceil(res.data.totalCount / 3));
				} else {
					console.log(res);
				}
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [filters, update]);

	return (
		<div class=' content'>
			<section className='section border-top'>
				<div className='container'>
					<div className='col-md-12 mb-4 text-center'>
						<h3 className='main-heading'>Ponuda svih automobila</h3>
						<div className='underline mx-auto'></div>
						{roleId == Roles.Prodavac && (
							<Link to='/addnewcar'>
								<Button className='btn'>Dodaj novo auto</Button>
							</Link>
						)}
						<div class='row my-5'>
							<BrandNameInput filters={filters} setFilters={setFilters} />
							<ModelNameInput filters={filters} setFilters={setFilters} />
							<BodyTypeInput filters={filters} setFilters={setFilters} />

							<FuelTypeInput filters={filters} setFilters={setFilters} />

							<PriceFromInput filters={filters} setFilters={setFilters} />
							<PriceToInput filters={filters} setFilters={setFilters} />
						</div>
					</div>

					{isLoading ? (
						<div class='spinner-border text-danger' role='status'>
							<span class='sr-only'></span>
						</div>
					) : (
						<div className='row'>
							{cars?.map(car => (
								<div className='col-md-4 text-center my-2'>
									<Link
										to={'/car/' + car._id}
										style={{ textDecoration: 'none' }}>
										<div className='card shadow'>
											{' '}
											<img
												src={'http://localhost:3500/uploads/' + car.images}
												className='w-100 border-bottom'
												alt='Slika'
												height={200}
											/>
											<div className='card-body'>
												<h5>{car.brandName + ' ' + car.modelName}</h5>
												<h5>{car.priceDay + ' KM'}</h5>
												<p>{car.bodyTypeName + ' ' + car.fuelTypeName}</p>
												{roleId == Roles.Prodavac && (
													<>
														<div>
															{/* <Link to={'/updatecar/' + car._id}>
																<Button className='btn-success'>Uredi</Button>
															</Link> */}
															<Button
																className='btn-danger mx-3'
																onClick={e => {
																	e.preventDefault();
																	setShowConfirmDelete(true);
																	setCurrentCar(car);
																}}>
																Izbriši
															</Button>
														</div>
													</>
												)}
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
			<ConfirmModal
				show={showConfirmDelete}
				msg={'Sigurno želite obrisati auto?'}
				handleClose={() => {
					setShowConfirmDelete(false);
				}}
				handleAction={e => {
					setShowConfirmDelete(false);
					carsServices
						.deleteCar(currentCar._id)
						.then(res => {
							console.log(res);
							setUpdate(new Date());
						})
						.catch(err => console.log(err));
				}}
			/>
			<div class='container'>
				<div class='row'>
					<div class='col'></div>
					<div class='col'>
						<Pagination>
							{filters.pageIndex > 1 && (
								<Pagination.First
									onClick={() => {
										setFilters({
											...filters,
											pageIndex: 0,
										});
									}}
								/>
							)}
							{filters.pageIndex > 0 && (
								<Pagination.Item
									onClick={() => {
										setFilters({
											...filters,
											pageIndex: filters.pageIndex - 1,
										});
									}}>
									{filters.pageIndex}
								</Pagination.Item>
							)}
							<Pagination.Item className='pagination-active'>
								{filters.pageIndex + 1}
							</Pagination.Item>
							{maxPage > filters.pageIndex + 1 && (
								<Pagination.Item
									onClick={() => {
										setFilters({
											...filters,
											pageIndex: filters.pageIndex + 1,
										});
									}}>
									{filters.pageIndex + 2}
								</Pagination.Item>
							)}
							{filters.pageIndex + 2 < maxPage && (
								<Pagination.Last
									onClick={() => {
										setFilters({
											...filters,
											pageIndex: maxPage - 1,
										});
									}}
								/>
							)}
						</Pagination>
					</div>
					<div class='col'></div>
				</div>
			</div>
		</div>
	);
}

export default Offer;
