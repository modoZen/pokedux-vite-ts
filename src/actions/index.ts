import { PokemonType } from "../api";
import { SET_POKEMONS } from "./types";


export const setPokemmons = (payload: PokemonType[])=>({
    type: SET_POKEMONS,
    payload
})