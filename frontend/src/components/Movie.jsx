import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ film }) => {
  const history = useNavigate();
  return (
    <div className="col-sm-3">
      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-body">
          <h4 className="card-title">{film.title}</h4>
          <p>Episode: {film.episode_id}</p>
        <button
          type="button"
          className="btn btn-sm btn-light"
          onClick={() => history(`${film.episode_id}`, { state: film })}
        >
          know more...
        </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
