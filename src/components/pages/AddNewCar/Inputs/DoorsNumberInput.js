const DoorsNumberInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      setCarData({ ...carData, doorsNum: event.target.value });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Broj vrata</label>
         <input
            type="number"
            min="2"
            max="7"
            className="form-control"
            placeholder="Unesi broj vrata"
            onChange={onChange}
         />
      </div>
   );
};

export default DoorsNumberInput;
