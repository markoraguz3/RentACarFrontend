const EnginePowerInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      setCarData({ ...carData, enginePower: event.target.value });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Snaga motora</label>
         <input
            type="number"
            min="1"
            max="500"
            className="form-control"
            placeholder="Unesi snagu motora"
            onChange={onChange}
         />
      </div>
   );
};

export default EnginePowerInput;
