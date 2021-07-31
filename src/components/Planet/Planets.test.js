import { getPlanetId } from './utils'

test("should return an id given a name", () => {
  const mercuryId = getPlanetId('mercury')
  const marsId = getPlanetId('mars')
  expect(mercuryId).toBe(1);
  expect(marsId).toBe(4);
});