import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Make.module.css";
const Make = (props) => {
  const [visible, setVisible] = useState(9);
  const loadMoreData = () => {
    setVisible((prevValue) => prevValue + 9);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {props.items.slice(0, visible).map((make, i) => {
          return (
            <div key={i} className="col-md-4">
              <div className="card mt-3">
                <div className="card-body">
                  <h4>{make.MakeName}</h4>
                </div>
                <div className="card-footer">
                  <Link
                    className={classes.linkClass}
                    to={`/makelist/${make.MakeId}`}
                  >
                    View Models
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-md-12 mt-5 text-center">
          <button
            className="btn btn-success text-center btnClr"
            type="button"
            onClick={loadMoreData}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Make;
