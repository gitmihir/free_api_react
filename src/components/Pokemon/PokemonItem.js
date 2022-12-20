import React from "react";
import classes from "./PokemonItem.module.css";
const PokemonItem = (props) => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        {props.items.map((p, i) => {
          return (
            <div className="col-md-3" key={i}>
              <div className="card mt-2">
                <div className="card-body">
                  <b className={classes.boldclass}>{p}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PokemonItem;
