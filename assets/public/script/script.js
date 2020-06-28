const fetchPokemon = () => {
  const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonPromises = [];

  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemon(i)).then(response => response.json())
    );
  }
  Promise.all(pokemonPromises).then(pokemons => {
    console.log(pokemons);
    const listPokemons = pokemons.reduce((acumulator, pokemon) => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name);
      acumulator += `
      <li class="card">
      <img class="card-image" 
      src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
      <h2 class="card-title>${pokemon.id}. ${pokemon.name}</h2>
     <p class="subtitle">${types.join("")}</p>
      </li>
      `;
      return acumulator;
    }, "");
    console.log(listPokemons);
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = listPokemons;
  });
};
fetchPokemon();
