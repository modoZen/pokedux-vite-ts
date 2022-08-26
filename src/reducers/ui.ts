import { fromJS, setIn } from "immutable"
import { SET_LOADING } from "../actions/types"
import { PokemonDetailType } from "../api"

export type TypeState = {
    loading : boolean
}

const initialState = fromJS({
    loading: false
})

export const uiReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case SET_LOADING:
            // return {...state, loading: action.payload}
            return setIn(state, ['loading'], fromJS(action.payload));
        default:
            return state
    }

}