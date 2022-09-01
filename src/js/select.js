const renderSelect = (data) => {

  let select = document.querySelector("#types");

  let types = data.results;

  types.forEach((type) => {

    let option = document.createElement("option")
    option.setAttribute("value", type.name)
    option.innerText = type.name;
    select.appendChild(option);
  });
};

fetch(`${URL}/type/`)
  .then((response) => response.json())
  .then((data) => renderSelect(data));

//menu de tipos
document.querySelector("#types").addEventListener("change", function (evt) { //cuando seleccionamos un tipo diferente se dispara un evento con change
  let pokemons;
  let type_id = evt.target.value;

  if (type_id == "") {
    pokemons = pokemons_array;
  } else {
    pokemons = pokemons_array.filter(function (pokemon) { //recoger el valor del select
      return pokemon.types.includes(type_id);
    });
  }
  renderPokemon(pokemons); //recibe un nunevo arreglo ya filtrado  pokemon 2 y lo va a pintar render pokemon
});