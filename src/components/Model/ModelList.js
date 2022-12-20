import React from "react";
import { Link } from "react-router-dom";

const ModelList = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        {props.items.map((model, i) => {
          return (
            <div key={i} className="col-md-3">
              <div className="card mt-3 p-2">
                <b>{model.Model_Name}</b>
              </div>
            </div>
          );
        })}
        <div className="col-md-12 mt-5 mb-5">
          <Link className="btn btn-success" to="/makelist">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ModelList;
