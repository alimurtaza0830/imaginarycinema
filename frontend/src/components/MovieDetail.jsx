import React from "react";
import { useLocation } from "react-router-dom";
import { formateDate } from "../utils/helpers";

const MovieDetail = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="container">
        <div className="card row mb-3">
          <h3 className="card-header">{state.title}</h3>
          <div className="card-body">
            {/* <h5 className="card-title">Episode: {state.episode_id}</h5> */}
            <h5 className="card-title">Episode: {state.episode_id}</h5>
            <h6 className="card-subtitle text-muted">
              Directed By: {state.director}
            </h6>
          </div>
          <div className="card-body">
            <p className="card-text">
              {/* Edited Date: {formateDate(state.edited)} */}
              Edited Date: {formateDate(state.date_edited)}
            </p>
            <p className="card-text">
              Date Release: {formateDate(state.release_date)}
            </p>
          </div>

          <div className="card-footer text-muted">Sorry! All booked.</div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
