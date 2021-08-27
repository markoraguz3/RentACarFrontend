import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { brandsServices } from "../../../../services/carBrands.services";
const BrandNameInput = ({ filters, setFilters }) => {
   const [options, setOptions] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      brandsServices
         .getBrands()
         .then((res) => {
            if (res.status === 200) {
               setOptions(
                  res.data.map((x) => {
                     return {
                        value: x._id,
                        label: x.brandName,
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
         setFilters({ ...filters, brandId: event.value });
      } else {
         setFilters({ ...filters, brandId: null, modelId: null });
      }
   };
   return (
      <div className="col">
         <label>Marka auta</label>
         <Select
            options={options}
            isClearable
            isLoading={isLoading}
            onChange={onChange}
         />
      </div>
   );
};

export default BrandNameInput;
