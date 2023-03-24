const fetchPokemon = require('./api.js');

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', async () => {
    const pokemon = await fetchPokemon('pikachu');
    expect(pokemon.name).toEqual('pikachu'); 
    expect(pokemon.id).toEqual(25); 
    expect(pokemon.height).toEqual(4);
    expect(pokemon.weight).toEqual(60);
    expect(pokemon.types).toEqual(['electric']);
  });
});
