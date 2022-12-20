import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import VehicleVariableList from "../components/VehicleVariableList/VehicleVariableList";
import Loader from "../UI/Loader";
const Variables = () => {
  const [Variables, setVariables] = useState([]);
  const [Error, SetError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
      )
      .then(({ data }) => {
        console.log(data);
        const lodedvariables = [];
        const regex = /(<([^>]+)>)/gi;
        //const result = data.description.replace(regex, "");
        for (const key in data.Results) {
          lodedvariables.push({
            Description: data.Results[key].Description.replace(regex, ""),
            GroupName: data.Results[key].GroupName,
            Name: data.Results[key].Name,
          });
        }
        setIsLoading(false);
        setVariables(lodedvariables);
      })
      .catch((error) => {
        if (error.message.length !== 0) {
          SetError(true);
        }
      });
  }, []);
  return (
    <Fragment>
      {Error && "Something is Wrong Please try again later"}
      {!Error && !isLoading && Variables.length > 0 && (
        <VehicleVariableList items={Variables} />
      )}
      {isLoading && <Loader />}
    </Fragment>
  );
};
export default Variables;
