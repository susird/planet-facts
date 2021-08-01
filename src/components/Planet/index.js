import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_API, getPlanetId } from '../Planet/utils'
import './styles.css';

function Planet() {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const planetId = getPlanetId(id)
    fetch(`${URL_API}/${planetId}`).then((res) => res.json()).then((res) => {
      setData(res);
    })
  }, [id])

  return (
    <section className="container-planet">
      {data ?
        <article className="planet" style={{ backgroundColor: `${data.color}55` }}>
          <article className="planet-overview">
            <div className="image-container">
              <img className="planet-image" src={data.images.planet} alt={data.name} />
            </div>
            <aside className="overview">
              <h4 className="planet-name">{data.name}</h4>
              <p className="planet-description">{data.overview.content}</p>
              <p className="planet-source">Source: <a className="planet-source-link" href={data.overview.source}>Wikipedia</a></p>
            </aside>
          </article>
          <article className="planet-facts">
            <article className="fact">
              <h5 className="fact-title">rotation time</h5>
              <p className="fact-description">{data.rotation}</p>
            </article>
            <article className="fact">
              <h5 className="fact-title">revolution time</h5>
              <p className="fact-description">{data.revolution}</p>
            </article>
            <article className="fact">
              <h5 className="fact-title">radius</h5>
              <p className="fact-description">{data.radius}</p>
            </article>
            <article className="fact">
              <h5 className="fact-title">average temp.</h5>
              <p className="fact-description">{data.temperature}</p>
            </article>
          </article>
        </article>
        :
        <p>Loading...</p>
      }
    </section>
  )
}

export default Planet;
