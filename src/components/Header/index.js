import React from 'react';
import { Home } from '../Home';
import { Planet } from '../Planet';
import './styles.css';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

export function Header () {
  return (
    <div className="header">
      <h3>The planets</h3>
      <Switch>
        <Route exact path="/">
          <Link className="home-link" to="/all">Start</Link>
        </Route>
        <Route path="/:id" children={
          <> 
            <Planet />
            <Home />
          </>
        } />
      </Switch>
    </div>
  )
}