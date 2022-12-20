import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainMenu.module.css";
const MainMenu = () => {
  return (
    <Fragment>
      <div className={classes.horizontal}>
        <NavLink to="/home" className={classes.navbarbrand}>
          NHTSA
        </NavLink>
        <NavLink to="/home" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/makelist" activeClassName={classes.active}>
          Makes
        </NavLink>
        <NavLink to="/variables" activeClassName={classes.active}>
          Variables
        </NavLink>

        <NavLink to="/pokemondata" activeClassName={classes.active}>
          Pokemon Data
        </NavLink>
      </div>
    </Fragment>
  );
};
export default MainMenu;
