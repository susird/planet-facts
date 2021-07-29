import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';

function Planet () {
  let { id } = useParams();
  return (
    <main className="container-planet">
      <p>holi:{id}</p>
    </main>
  )
}

export default Planet;
