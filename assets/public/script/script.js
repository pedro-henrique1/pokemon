const fetchPokemon = () => {
  const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonPromises = [];

  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemon(i)).then(response => response.json())
    );
  }

  Promise.all(pokemonPromises).then(pokemons => {
    const listPokemons = pokemons.reduce((acumulator, pokemon) => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name);

      acumulator += `
      <li class="card">
      <img class="card-image" 
      src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
      <h2 class="card-title">${pokemon.name}</h2>
      </li>
      <div class="container2">
      <li class="cardInfo">
            <label for="status">Hp</label><br />
            <p class="statusPokemon">${pokemon.stats[0].base_stat}</p>
            <div class="progress">
              <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width:${pokemon.stats[0].base_stat}%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              ></div>
            </div>
        </li>

        <li class="cardInfo">
          <label for="status">ataque</label><br />
          <p class="statusPokemon">${pokemon.stats[1].base_stat}</p>
          <div class="progress">
            <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width:${pokemon.stats[1].base_stat}%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
          </div>
      </li>

        <li class="cardInfo">
           <label for="status">defesa</label><br />
            <p class="statusPokemon">${pokemon.stats[2].base_stat}</p>
         <div class="progress">
            <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width:${pokemon.stats[2].base_stat}%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
         </div>
        </li>
        
        <li class="cardInfo">
           <label for="status">ataque especial</label><br />
            <p class="statusPokemon">${pokemon.stats[3].base_stat}</p>
          <div class="progress">
            <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width:${pokemon.stats[3].base_stat}%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
          </div>
        </li>
        
        <li class="cardInfo">
            <label for="status">defesa especial</label><br />
            <p class="statusPokemon">${pokemon.stats[4].base_stat}</p>
            <div class="progress">
              <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width:${pokemon.stats[4].base_stat}%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              ></div>
            </div>
        </li>
        
        <li class="cardInfo">
          <label for="status">velocidade</label><br />
          <p class="statusPokemon">${pokemon.stats[5].base_stat}</p>
          <div class="progress">
            <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width:${pokemon.stats[5].base_stat}%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
          </div>
        </li>
      </div>
        `;
      return acumulator;
    }, "");
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = listPokemons;
  });
};
fetchPokemon();
