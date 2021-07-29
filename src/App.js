import React from 'react';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Planet } from './components/Planet';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Header />
        <Planet />
      </div>
    </Router>
  );
}

export default App;