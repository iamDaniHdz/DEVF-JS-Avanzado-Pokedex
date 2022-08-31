let pokemons_array = []; //primer paso para el array
//poster

console.log(typeColors);
fetch(`${URL}/pokemon?limit=151`) //para poner limites
    .then((response) => response.json())
    .then(data => {
        pokemons_array = data.results; //results de la linea 14 para guardar en algun punto
        renderPokemon(pokemons_array);
    })
const renderPokemon = (data) => {
    document.querySelector("#logo").innerHTML = "";
    let pokemonimages = data;
    pokemonimages.forEach((pokemonimage, i) => {
        fetch(pokemonimage.url)
            .then((response) => response.json())
            .then((pokemon) => {
                let separa = document.createElement("div");
                separa.classList.add("col-lg-2", "col-md-3", "col-sm-5","img-responsive", "text-center", "poke-card") // aqui se pueden añadir las clases de bootstrap para el css y el resposive

                // cambiar el color de la card segun el type
                const backgroundCard = pokemon.types[0].type.name
                separa.style.background = typeColorsOpacity[backgroundCard]

                let img = document.createElement("img");
                img.setAttribute("src", pokemon.sprites.front_default);
                img.setAttribute("alt", pokemon.name);
                separa.append(img);
                //document.querySelector("#logo").append(img);
                //para crear un parrafo ( el nombre del pokemon)
                //document.querySelector("#logo").append(nombre);

                // INICIO DE LA MODIFICACION

                    // crear parrafo con el ID del pokemon
                    let idPokemon = document.createElement("p")
                    idPokemon.innerHTML = `#${pokemon.id}`
                    idPokemon.classList.add("idPokemon")
                    separa.append(idPokemon)

                    // crear parrafo con el NAME del pokemon
                    let nombre = document.createElement("p")
                    nombre.innerHTML = pokemon.name
                    nombre.classList.add("nombrePokemon")
                    separa.append(nombre);

                    // crear div con el TYPE del pokemon
                    const typePokemon = document.createElement("div");
                    typePokemon.classList.add("d-flex", "align-items-center", "justify-content-evenly", "mb-3")

                    const typePokemonTitle = document.createElement("div");
                    const typePokemonName = document.createElement("div");
                    typePokemonTitle.textContent = "Tipo:"
                    typePokemonTitle.classList.add("typePokemonTitle")

                    typePokemonName.textContent = pokemon.types[0].type.name
                    typePokemonName.classList.add("typePokemon", "text-white")
                    typePokemonName.style.background = typeColors[backgroundCard]

                    typePokemon.appendChild(typePokemonTitle);
                    typePokemon.appendChild(typePokemonName);
                    separa.appendChild(typePokemon);

                    // crear parrafo con las ABILITIES del pokemon
                    let abilitiesPokemon = document.createElement("p")
                    abilitiesPokemon.innerHTML = "Habilidades:"
                    abilitiesPokemon.classList.add("abilitiesPokemonTitle")
                    separa.append(abilitiesPokemon)

                    let abilities = pokemon.abilities
                    abilities.forEach(ability => {
                    let abilityPokemon = document.createElement("p")
                    abilityPokemon.innerHTML = `${ability.ability.name}`
                    abilityPokemon.classList.add("abilityPokemon")
                    separa.append(abilityPokemon)
                    })

                    // crear div con el WEIGHT del pokemo
                    const weightPokemon = document.createElement("div");
                    weightPokemon.classList.add("d-flex", "align-items-center", "justify-content-evenly")

                    const weightPokemonTitle = document.createElement("div");
                    const weightPokemonAmount = document.createElement("div");

                    weightPokemonTitle.textContent = "Peso:"
                    weightPokemonTitle.classList.add("weightPokemonTitle")

                    weightPokemonAmount.innerHTML = `${pokemon.weight} KG`
                    weightPokemonAmount.classList.add("weightPokemon")

                    weightPokemon.appendChild(weightPokemonTitle);
                    weightPokemon.appendChild(weightPokemonAmount);
                    separa.appendChild(weightPokemon);
                        
                // FIN DE LA MODIFICACION

                document.querySelector("#logo").append(separa);
                console.log(pokemon.sprites.front_default)
                let types = [];
                for (var n in pokemon.types) {
                    types.push(pokemon.types[n].type.name);
                    pokemons_array[i].types = types;
                }
                console.log(pokemon)
            })
    })
};