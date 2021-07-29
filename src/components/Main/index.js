import React from 'react';
import  Header  from '../Header';
import Routes from '../Routes';
import { BrowserRouter as Router } from "react-router-dom";

function Main () {
  return (
    <main className="main">
      <Router>
        <Header />
        <Routes />
      </Router>
    </main>
  )
}

export default Main;
