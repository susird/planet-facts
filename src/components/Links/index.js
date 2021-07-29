import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Links() {
  const links = [
    { to: "/mercury", name: "mercury" },
    { to: "/venus", name: "venus" },
    { to: "/earth", name: "earth" },
    { to: "/mars", name: "mars" },
    { to: "/jupiter", name: "jupiter" },
    { to: "/saturn", name: "saturn" },
    { to: "/uranus", name: "uranus" },
    { to: "/neptune", name: "neptune" }
  ]
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
