import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("Why not fill this email? 😉")
    .min(5, "Need a bigger email 😄")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern not matched 🤔"
    ),
  password: yup
    .string()
    .required("Why not fill this password? 😉")
    .min(8, "Need a bigger password 😄")
    .max(12, "Too much password 😅"),
});

export function BasicForm() {
  const { values, handleChange, handleSubmit, errors, touched ,handleBlur} = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
      name="email"
        type="email"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email&&touched.email?errors.email:""}
      <input
      name="password"
        type="password"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password&&touched.password?errors.password:""}
      <button type="submit">Submit</button>
    </form>
  );
}
