const fetchPokemon = require('./api.js');

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', async () => {
    const pokemon = await fetchPokemon('pikachu');
    expect(pokemon.name).toEqual('pikachu'); 
  });
});