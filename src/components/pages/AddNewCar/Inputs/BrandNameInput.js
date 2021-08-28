import Select from "react-select";
import { useEffect } from "react";
import { useState } from "react";
import { brandsServices } from "../../../../services/carBrands.services";

const BrandNameInput = ({ carData, setCarData }) => {
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
         setCarData({
            ...carData,
            brandId: event.value,
            brandName: event.label,
         });
      } else {
         setCarData({
            ...carData,
            brandId: null,
            brandName: null,
            modelId: null,
            modelName: null,
         });
      }
   };

   return (
      <div className="form-group col">
         <label className="mb-1">Marka automobila</label>
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
