import { getPokemon } from "./api";
console.log("funciono ")
callPokemon();

function callPokemon(){
let pokemon = getPokemon(1);
pokemon.then((res) => res.json())
.then((res2)=>{

    console.log(res2)
})
}