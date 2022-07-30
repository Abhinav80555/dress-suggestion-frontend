import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../pages/global";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";


const formValidationSchema = yup.object({
  image:yup.string().required("why not filled this"),
dressname:yup.string().required("why not filled this"),
color:yup.string().required("why not filled this"),
cat:yup.string().required("why not filled this"),
summary:yup.string().required("why not filled this"),
info:yup.string().required("why not filled this"),
});



export function EditDressForm({ dress }) {

  const navigate = useNavigate();


  const { values, handleChange, handleSubmit, errors, touched ,handleBlur} = useFormik({
    initialValues: {  image:dress.image, dressname:dress.dressname, color:dress.color, cat:dress.cat, summary:dress.summary, info:dress.info  },
    validationSchema: formValidationSchema,

    onSubmit: (values) => {
      console.log(values);
      editDress(values);
    },
  });


  const editDress = (updatedDress) => {

    fetch(`${API}/dress/${dress._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedDress),
      headers: { "Content-Type": "application/json"}
    })
      .then(() => navigate("/dresses"));
  };
  return (
    <div>
      <h1>Edit Dress</h1>

      <form onSubmit={handleSubmit} className="add-dress-form">
        <TextField
        name="image"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.image}
          label="image link"
          variant="standard"
          error={errors.image && touched.image}
          helperText={errors.image&&touched.image?errors.image:""} />
          
        <TextField
           name="dressname"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.dressname}
          label="Dress name"
          variant="standard"
          error={errors.dressname && touched.dressname}
          helperText={errors.dressname&&touched.dressname?errors.dressname:""} />
          
        <TextField
           name="cat"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.cat}
          label="Dress category "
          variant="standard"
          error={errors.cat && touched.cat}
          helperText={errors.cat&&touched.cat?errors.cat:""} />
          
        <TextField
           name="color"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.color}
          label="Dress Colour"
          variant="standard"
          error={errors.color && touched.color}
          helperText={errors.color&&touched.color?errors.color:""} />
          
        <TextField
           name="summary"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.summary}
          label="Summary"
          variant="standard" 
          error={errors.summary && touched.summary}
          helperText={errors.summary&&touched.summary?errors.summary:""}/>
          
        <TextField
          name="info"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.info}
          label="Information"
          variant="standard"
          error={errors.info && touched.info}
          helperText={errors.info&&touched.info?errors.info:""}/>
          
        <Button type="submit" variant="contained">
           Save
        </Button>
      </form>
    </div>
  );
}
