import { SET_POKEMONS } from "../actions/types"
import { PokemonDetailType } from "../api"

export type TypeState = {
    pokemons: PokemonDetailType[]
}

const initialState: TypeState = {
    pokemons: []
}

export const pokemonReducer = (state:TypeState = initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}

        default:
            return state
    }

}