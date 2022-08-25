import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, ref, string } from "yup";
import { register } from "../services/api";
import Input from "./Input";

const RegisterForm = () => {
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const registerValidation = object().shape({
    name: string().required(),
    email: string()
      .required("Required")
      .email("Valid email required"),
    password: string()
      .min(6, "Required")
      .required("Required"),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

  const handleSubmit = async (values) => {
    const { status, data } = await register(values);
    if (status >= 400) return setError(data);

    localStorage.setItem("token", data);
    setTimeout(() => {
      navigate("../movies", { replace: true });
    }, 1500);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      >
        {() => {
          return (
            <Form>
              <div className="form-group">
                {error && (
                  <div className="alert alert-dismissible alert-danger">
                    {error}
                  </div>
                )}
                <Input name="name" label="Name" type="text" />
                <Input name="email" label="Email" type="email" />
                <Input name="password" label="Password" type="password" />
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
                <div className="form-floating">
                  <button className="btn btn-primary" type="submit">
                    register
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
