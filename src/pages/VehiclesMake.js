import React, { Fragment, useState, useEffect } from "react";
import Make from "../components/Make/Make";
import Loader from "../UI/Loader";
import axios from "axios";
const VehiclesMake = () => {
  const [makes, setMakes] = useState([]);
  const [Error, SetError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadmorevehicledata = () => {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api//vehicles/GetMakesForVehicleType/car?format=json"
      )
      .then(({ data }) => {
        const newVhdata = [];
        //console.log(data);
        //data.Results.forEach((p) => newVhdata.push(p.Make_Name));

        const singlemakename = data.Results[0].MakeName;

        for (const key in data.Results) {
          newVhdata.push({
            MakeId: data.Results[key].MakeId,
            MakeName: data.Results[key].MakeName,
          });
        }
        setMakes(newVhdata);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.message.length !== 0) {
          SetError(true);
        }
      });
  };
  useEffect(() => {
    loadmorevehicledata();
  }, []);
  return (
    <Fragment>
      {Error && "Something is Wrong Please try again later"}
      {!Error && !isLoading && makes.length > 0 && <Make items={makes} />}
      {isLoading && <Loader />}
    </Fragment>
  );
};
export default VehiclesMake;
