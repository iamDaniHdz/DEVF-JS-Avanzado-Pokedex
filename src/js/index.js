// DOM
const pokeCard = document.getElementById('data-poke-card');
const pokeName = document.getElementById('data-poke-name');
const pokeImg = document.getElementById('data-poke-img');
const pokeImgContainer = document.getElementById('data-poke-img-container');
const pokeId = document.getElementById('data-poke-id');
const pokeWeight = document.getElementById('data-poke-weight');
const pokeTypes = document.getElementById('data-poke-types');
const pokeStats = document.getElementById('data-poke-stats');
const pokeAbilities = document.getElementById('data-poke-abilities');
const divSearch = document.getElementById('search');

// colores a usar segun el tipo de pokemon
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
    white: '#FFF',
};

// funcion para llamar a la API
const searchPokemon = event => {
    event.preventDefault();
    const {
        value
    } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

// funcion para colocar los datos en el html - img, name, id, weight
const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const {
        stats,
        types,
        abilities,
        weight
    } = data;
    const backgroundCard = data.types[0].type.name

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    renderPokemonTypes(types);
    renderPokemonStats(stats);
    renderPokemonAbilities(abilities);
    renderPokemonWeight(weight)
    console.log(data); // eliminar despues del development
    pokeCard.style.background = typeColors[backgroundCard];
}

// funcion para crear un div con los datos de TYPE en el html
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.background = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

// funcion para crear un div con los datos de STATS en el html
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

// funcion para crear un div con los datos de WEIGHT en el html
const renderPokemonWeight = weight => {
    pokeWeight.innerHTML = '';
    const weightTextElement = document.createElement("div");
    weightTextElement.style.background = typeColors.white;
    weightTextElement.textContent = `${weight} KG`;
    pokeWeight.appendChild(weightTextElement);
}

// funcion para crear un div con los datos de ABILITIES en el html
const renderPokemonAbilities = abilities => {
    pokeAbilities.innerHTML = '';
    abilities.forEach(ability => {
        const abilitieTextElement = document.createElement("div");
        abilitieTextElement.style.background = typeColors.white;
        abilitieTextElement.textContent = ability.ability.name;
        pokeAbilities.appendChild(abilitieTextElement);
    });
}

// funcion en caso de que el pokemon no se encuentre
const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'https://svgsilh.com/png-1024/1574006.png');
    pokeImg.style.background = 'none';

    pokeTypes.innerHTML = `<div class="spinner-border text-light" role="status"> <span class="visually-hidden">Loading...</span></div>`;
    pokeAbilities.innerHTML = `<div class="spinner-border text-light" role="status"> <span class="visually-hidden">Loading...</span></div>`;
    pokeWeight.innerHTML = `<div class="spinner-border text-light" role="status"> <span class="visually-hidden">Loading...</span></div>`; 
    pokeStats.innerHTML = `<div class="d-flex justify-content-center"><div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
    pokeId.textContent = 'Intenta nuevamente';

    pokeCard.style.background = '#f1f2d3';
}