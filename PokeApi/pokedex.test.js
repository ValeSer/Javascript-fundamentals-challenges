const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('adds a Pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    expect(pokedex.all()[0].name).toEqual('pikachu');
  });

  it('adds a second Pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    expect(pokedex.all()[0].name).toEqual('pikachu');
    expect(pokedex.all()[1].name).toEqual('jigglypuff');
  });
})