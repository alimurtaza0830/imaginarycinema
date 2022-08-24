import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";

import jwtDecode from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  
    let userData = localStorage.getItem('token');
    if(!userData) return console.log('no user found');
    const { name } = jwtDecode(userData);
    console.log(name);
  
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        {/* <ProtectedRoute path="/movies" element={<MovieList />} /> */}
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
