import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div
      className={`form-floating mb-2 ${
        meta.error && meta.touched ? "has-danger" : ""
      }`}
    >
      <input
        {...field}
        {...props}
        className={` form-control ${
          meta.error && meta.touched ? "is-invalid" : ""
        }`}
      />
      <label htmlFor={`floatingInput ${field.name}`}> {label} </label>
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default Input;
