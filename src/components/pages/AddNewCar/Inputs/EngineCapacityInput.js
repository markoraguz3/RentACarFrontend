const EngineCapacityInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      setCarData({ ...carData, engineCapacity: event.target.value });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Zapremina motora</label>
         <input
            type="number"
            min="1"
            max="500"
            className="form-control"
            placeholder="Unesi zapreminu motora"
            onChange={onChange}
         />
      </div>
   );
};

export default EngineCapacityInput;
