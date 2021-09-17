/** @format */

const PriceFromInput = ({ filters, setFilters }) => {
	return (
		<div className='col'>
			<label>Cijena do</label>

			<div className='input-group'>
				<input
					type='number'
					min='1'
					max='500'
					className='form-control'
					onChange={e => {
						setFilters({ ...filters, priceFrom: e.target.value });
					}}
				/>
				<div className='input-group-append'>
					<span className='input-group-text'>.00 KM</span>
				</div>
			</div>
		</div>
	);
};

export default PriceFromInput;
