import React, { Fragment, useEffect, useState } from "react";
import ModelList from "../components/Model/ModelList";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";
const VehiclesDetail = () => {
  const params = useParams();
  const getmakeid = params.makeid;
  const modelurl = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${getmakeid}?format=json`;
  const [Modellist, SetModellist] = useState([]);
  const [Error, SetError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(modelurl)
      .then(({ data }) => {
        // console.log(data);
        const lodedmodels = [];
        for (const key in data.Results) {
          lodedmodels.push({
            Make_Name: data.Results[key].Make_Name,
            Model_Name: data.Results[key].Model_Name,
          });
        }
        SetModellist(lodedmodels);
        SetError(false);
        setIsLoading(false);
        console.log(data.Results[0].Make_Name);
      })
      .catch((error) => {
        if (error.message.length !== 0) {
          SetError(true);
        }
      });
  }, [modelurl]);

  return (
    <Fragment>
      {Error && "Something is Wrong Please try again later"}
      {!Error && <ModelList items={Modellist} />}
      {isLoading && <Loader />}
    </Fragment>
  );
};
export default VehiclesDetail;
