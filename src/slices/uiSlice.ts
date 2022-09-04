import { createSlice } from "@reduxjs/toolkit"

export type TypeState = {
    loading : boolean
}

const initialState:TypeState = {
    loading: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
})

export const uiReducer = uiSlice.reducer;

export const { setLoading } = uiSlice.actions;
