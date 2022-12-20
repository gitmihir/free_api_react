import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./UI/Loader";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";

const VehiclesMake = React.lazy(() => import("./pages/VehiclesMake"));
const NotFound = React.lazy(() => import("./pages/404"));
const Pokemon = React.lazy(() => import("./pages/Pokemon"));
const VehiclesDetail = React.lazy(() => import("./pages/VehiclesDetail"));
const Variables = React.lazy(() => import("./pages/Variables"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/makelist" exact>
            <VehiclesMake />
          </Route>
          <Route path="/makelist" exact>
            <VehiclesMake />
          </Route>
          <Route path="/pokemondata" exact>
            <Pokemon />
          </Route>
          <Route path="/makelist/:makeid">
            <VehiclesDetail />
          </Route>
          <Route path="/variables/" exact>
            <Variables />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
