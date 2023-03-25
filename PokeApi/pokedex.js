const fetchPokemon = require('./api.js')

class Pokedex {
  constructor() {
    this.pokedex = [];
  }

  async catch(name){
    let pokemon = await fetchPokemon(name);
    this.pokedex.push(pokemon);
  }

  all() {
    return this.pokedex;
  }
}


module.exports = Pokedex;