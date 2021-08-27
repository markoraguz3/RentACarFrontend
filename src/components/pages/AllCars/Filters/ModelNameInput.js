import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { modelServices } from "../../../../services/brandModel.services";

const ModelNameInput = ({ filters, setFilters }) => {
   const [options, setOptions] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      modelServices
         .getModels({ brandId: filters.brandId })
         .then((res) => {
            if (res.status === 200) {
               setOptions(
                  res.data.map((x) => {
                     return {
                        value: x._id,
                        label: x.modelName,
                     };
                  })
               );
            } else {
               console.log(res);
            }
            setIsLoading(false);
         })
         .catch((err) => console.log(err));
   }, [filters]);

   const onChange = (event) => {
      if (event) {
         setFilters({ ...filters, modelId: event.value });
      } else {
         setFilters({ ...filters, modelId: null });
      }
   };

   return (
      <div className="col">
         <label>Model auta</label>
         <Select
            options={options}
            isDisabled={!filters.brandId}
            isClearable
            isLoading={isLoading}
            onChange={onChange}
         />
      </div>
   );
};

export default ModelNameInput;
