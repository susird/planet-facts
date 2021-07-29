import React from 'react';
import { Link } from 'react-router-dom';
import Links from '../Links';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <Link className="planets-home-link" to="/">The planets</Link>
      <Links />
    </div>
  )
}

export default Header;
