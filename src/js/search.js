const frmBuscar =document.querySelector("#search");
const content =document.querySelector("#content");

const renderResults=(results) =>{
content.innerHTML="";

let block =document.createElement("div");
block.classList.add("row", "col-12" , "m-0");
block.setAttribute("id" , "categories-group");

content.appendChild(block);
}
/*
results.forEach(pokemon => { aqui tengo duda esta bien el pokemon?
    console.log(pokemon);
block.insertAdjacentElement(
"beforeend", 
`
< div class="col-3">
<img src="${ }" width"100%"/> aqui va el url de la imagen
</div>
`);
});
};*/
frmBuscar.addEventListener("submit", (event)=> {
event.preventDefault();

const{pokeName} =event.target;
let nuevos= pokemons_array.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(pokeName.value.toLowerCase())
 })
  renderPokemon(nuevos);

/*fetch(`${URL}/type/`)  //no se cual es  la url para hacer la busqueda ejemplo //search/multi?api_key=

.then((response) => response.json())
.then((data) => renderResults(data.results));*/
console.log(pokeName)
});