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
import ConfirmModal from '../../common/ConfirmModal';

const AllCars = () => {
	const { userId, roleId } = useContext(AuthContext);
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
	const [cars, setCars] = useState([]);
	const [maxPage, setMaxPage] = useState(0);

	const [update, setUpdate] = useState(new Date());
	const [isLoading, setIsLoading] = useState(true);
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
		<div>
			{isLoading ? (
				<div class='spinner-border text-danger' role='status'>
					<span class='sr-only'></span>
				</div>
			) : (
				<div className='row'>
					{cars?.map(car => (
						<div className='col-md-4 text-center my-2'>
							<Link to={'/car/' + car._id} style={{ textDecoration: 'none' }}>
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
										<p>{car.userName}</p>

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
								</div>
							</Link>
						</div>
					))}
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
			)}
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
		</div>
	);
};

export default AllCars;
