import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { bodyTypesServices } from "../../../../services/bodyTypes.services";

const BodyTypeInput = ({ carData, setCarData }) => {
   const [options, setOptions] = useState([
      { value: "Hedgeback", label: "Hedgeback" },
   ]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      bodyTypesServices
         .getBodyTypes()
         .then((res) => {
            if (res.status === 200) {
               setOptions(
                  res.data.map((x) => {
                     return {
                        value: x._id,
                        label: x.bodyType,
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
            bodyTypeId: event.value,
            bodyTypeName: event.label,
         });
      } else {
         setCarData({ ...carData, bodyTypeId: null, bodyTypeName: null });
      }
   };

   return (
      <div className="form-group col">
         <label className="mb-1">Karoserija</label>
         <Select
            isClearable
            options={options}
            onChange={onChange}
            isLoading={isLoading}
         />
      </div>
   );
};

export default BodyTypeInput;
