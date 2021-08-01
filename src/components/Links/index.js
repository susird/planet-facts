import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { links } from '../../utils'

function Links() {
  return (
      <ul className="planets">
        {links.map(link =>
          <li key={link.to}>
            <Link className="planet-link" to={link.to}>{link.name}</Link>
          </li>
        )}
      </ul>
  )
}

export default Links;
