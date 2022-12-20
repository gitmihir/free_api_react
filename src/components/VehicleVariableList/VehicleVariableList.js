import { useState } from "react";
import "./VehicleVariableList.css";
import Modal from "../../UI/Modal";
const VehicleVariableList = (props) => {
  const [offset, setOffset] = useState(6);
  const loadMoreData = () => {
    setOffset((prevValue) => prevValue + 6);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {props.items.slice(0, offset).map((variableItem, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="card mt-3 customHeight">
                <div className="card-header">
                  <b>{variableItem.Name}</b>
                </div>
                <div className="card-body">
                  <p>{variableItem.Description}</p>
                  <p>Read More...</p>
                </div>
                <div className="card-footer">{variableItem.GroupName}</div>
              </div>
            </div>
          );
        })}
        <div className="col-md-12 mt-3 mb-3">
          <button className="btn btn-success" onClick={loadMoreData}>
            Load More
          </button>
        </div>
        <Modal />
      </div>
    </div>
  );
};
export default VehicleVariableList;
