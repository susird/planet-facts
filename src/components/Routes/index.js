import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "../Home";
import Planet from "../Planet";

const routes = [
  { 
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/:id",
    main: Planet
  }
]

function Routes () {
  return (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        children={<route.main/>}
      />
    ))}
  </Switch>
)
}

export default Routes;
