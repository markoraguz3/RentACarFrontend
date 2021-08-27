import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { fuelTypesServices } from "../../../../services/fuelTypes.services";

const FuelTypeInput = ({ filters, setFilters }) => {
   const [options, setOptions] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fuelTypesServices
         .getFuelTypes()
         .then((res) => {
            if (res.status === 200) {
               setOptions(
                  res.data.map((x) => {
                     return {
                        value: x._id,
                        label: x.fuelType,
                     };
                  })
               );
            } else {
               console.log(res);
            }
            setIsLoading(false);
         })
         .catch((err) => console.log(err));
   }, []);

   const onChange = (event) => {
      if (event) {
         setFilters({ ...filters, fuelTypeId: event.value });
      } else {
         setFilters({ ...filters, fuelTypeId: null });
      }
   };

   return (
      <div class="col">
         <label>Gorivo</label>
         <Select
            options={options}
            isClearable
            isLoading={isLoading}
            onChange={onChange}
         />
      </div>
   );
};

export default FuelTypeInput;
