import { getPokemon } from "./api";
console.log("funciono ")
callPokemon();

function callPokemon(){
let pokemon = getPokemon(1);
pokemon.then((res) => res.json())
.then((res2)=>{

    console.log(res2)
    let {name,sprites,stats}= res2;
    showPokemon(name,sprites,stats);
})
}

function showPokemon(name, sprites, stats) {
    let input = document.getElementById("pokeSearch");
    input.placeholder = name;
    let div = document.getElementById("pokename");
  
    let table = `<table><tr><td>${name}</td></tr>`;
  
    for (var i = 0; i < stats.length; i++) {
      table += `<tr><td>${stats[i].stat.name}</td><td>${stats[i].base_stat}</td></tr>`;
    
    }
  
    table += `</table>`;
  
    div.innerHTML = table;
  }
  