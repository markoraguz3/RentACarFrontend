const PriceDayInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      setCarData({ ...carData, priceDay: event.target.value });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Cijena dan</label>
         <div className="input-group">
            <input
               type="number"
               min="1"
               max="500"
               className="form-control"
               placeholder="Unesi cijenu"
               onChange={onChange}
            />
            <div className="input-group-append">
               <span className="input-group-text">.00 KM</span>
            </div>
         </div>
      </div>
   );
};

export default PriceDayInput;
