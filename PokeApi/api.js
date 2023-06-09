const fetchPokemon = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.types[0].type)
      return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name)
      }
    });
  
}


module.exports = fetchPokemon;