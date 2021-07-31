import { links } from '../../utils';
export const URL_API = 'https://my-json-server.typicode.com/susird/planet-facts/planets';

export const getPlanetId = (name) => {
  const objectId = links.filter(link => link.name === name);
  return objectId[0].id;
}
