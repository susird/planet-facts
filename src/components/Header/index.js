import React from 'react';
import { Link } from 'react-router-dom';
import HamBox from '../Hambox';
import Links from '../Links';
import './styles.css';

function Header() {
  const isPageWide = window.matchMedia('(max-width: 960px)').matches;
  return (
    <header className="header">
      <Link className="planets-home-link" to="/">The planets</Link>
      {isPageWide ?
        <HamBox /> :
        <Links /> 
      }
    </header>
  )
}

export default Header;
