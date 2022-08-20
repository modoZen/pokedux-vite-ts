import { SET_POKEMONS } from "../actions/types"
import { PokemonType } from "../api"

type TypeState = {
    pokemons: PokemonType[]
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