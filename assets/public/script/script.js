const fetchPokemon = () => {
  const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonPromises = [];

  for (let i = 1; i <= 1; i++) {
    pokemonPromises.push(
      fetch(getPokemon(i)).then(response => response.json())
    );
  }
  console.log(pokemonPromises);

  Promise.all(pokemonPromises).then(pokemons => {
    const listPokemons = pokemons.reduce((acumulator, pokemon) => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name);
      console.log(pokemon.stats[0].base_stat);

      acumulator += `
      <li class="card">
      <img class="card-image" 
      src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
      <h2 class="card-title">${pokemon.name}</h2>
      
          <label for="status">Rapidez</label><br />
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width:${pokemon.stats[0].base_stat}% "
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </li>
      </div>
    </div>
      </li>`;
      return acumulator;
    }, "");
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = listPokemons;
  });
};
fetchPokemon();
