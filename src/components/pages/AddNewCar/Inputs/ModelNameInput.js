import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { modelServices } from "../../../../services/brandModel.services";

const ModelNameInput = ({ carData, setCarData }) => {
   const [options, setOptions] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      modelServices
         .getModels({ brandId: carData.brandId })
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
   }, [carData]);

   const onChange = (event) => {
      if (event) {
         setCarData({
            ...carData,
            modelId: event.value,
            modelName: event.label,
         });
      } else {
         setCarData({ ...carData, modelId: null, modelName: null });
      }
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Model automobila</label>
         <Select
            options={options}
            isDisabled={!carData.brandId}
            isClearable
            isLoading={isLoading}
            onChange={onChange}
         />
      </div>
   );
};

export default ModelNameInput;
