import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
