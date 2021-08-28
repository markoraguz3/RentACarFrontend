import { Form } from "react-bootstrap";
const ImageInput = ({ carData, setCarData }) => {
   const onChange = (event) => {
      console.log(event.target.files[0]);
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      console.log(formData);
      setCarData({ ...carData, images: event.target.files[0] });
   };
   return (
      <div className="form-group col">
         <label className="mb-1">Slika auta</label>
         <Form.Control type="file" required name="file" onChange={onChange} />
      </div>
   );
};

export default ImageInput;
