const SeatsNumberInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      setCarData({ ...carData, seatsNum: event.target.value });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Broj sjedala</label>
         <input
            type="number"
            min="2"
            max="7"
            className="form-control"
            placeholder="Unesi broj sjedala"
            onChange={onChange}
         />
      </div>
   );
};

export default SeatsNumberInput;
