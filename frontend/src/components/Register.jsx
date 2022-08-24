import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../services/api";


const RegisterForm = () => {
  const registerationForm = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerationForm,
    onSubmit: async (values) => {
      const checking = await register(values);

    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <div className="form-floating mb-3">
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
