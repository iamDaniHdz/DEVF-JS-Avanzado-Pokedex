let pokemons_array = []; //primer paso para el array
//poster
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
                separa.classList.add("col-4", "img-responsive", "text-center")
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
                    separa.append(idPokemon)

                    // crear parrafo con el NAME del pokemon
                    let nombre = document.createElement("p")
                    nombre.innerHTML = pokemon.name
                    separa.append(nombre);

                    // crear parrafo con el TYPE del pokemon
                    let typePokemonTitle = document.createElement("p")
                    typePokemonTitle.innerHTML = `Tipo:`
                    separa.append(typePokemonTitle)

                    let typePokemon = document.createElement("p")
                    typePokemon.innerHTML = `${pokemon.types[0].type.name}`
                    separa.append(typePokemon)
    
                    // crear parrafo con las ABILITIES del pokemon
                    let abilitiesPokemon = document.createElement("p")
                    abilitiesPokemon.innerHTML = "Habilidades:"
                    separa.append(abilitiesPokemon)

                    let abilities = pokemon.abilities
                    abilities.forEach(ability => {
                    let abilityPokemon = document.createElement("p")
                    abilityPokemon.innerHTML = `- ${ability.ability.name}`
                    separa.append(abilityPokemon)
                    })

                    // crear parrafo con el WEIGHT del pokemon
                    let weightPokemonTitle = document.createElement("p")
                    weightPokemonTitle.innerHTML = "Peso:"
                    separa.append(weightPokemonTitle)

                    let weightPokemon = document.createElement("p")
                    weightPokemon.innerHTML = `${pokemon.weight} KG`
                    separa.append(weightPokemon)
                        
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