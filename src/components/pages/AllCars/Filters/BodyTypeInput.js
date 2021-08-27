import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { bodyTypesServices } from "../../../../services/bodyTypes.services";

const BodyTypeInput = ({ filters, setFilters }) => {
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
         setFilters({ ...filters, bodyTypeId: event.value });
      } else {
         setFilters({ ...filters, bodyTypeId: null });
      }
   };

   return (
      <div className="col">
         <label>Karoserija</label>
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
