import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { login } from "../services/api";
import Input from "./Input";

const LoginForm = () => {
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const LoginValidation = object().shape({
    email: string()
      .required("Required")
      .email("Valid email required"),
    password: string()
      .min(6, "Required")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    const { status, data } = await login(values);
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
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
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
                <Input name="email" label="Email" type="email" />
                <Input name="password" label="Password" type="password" />
                <div className="form-floating">
                  <button className="btn btn-primary" type="submit">
                    Login
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

export default LoginForm;
