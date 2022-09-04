import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { dataReducer } from "./dataSlice";
import { uiReducer } from "./uiSlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
        ui : uiReducer
    }
})

type RootState = ReturnType<typeof store.getState>

type Appdispatch = typeof store.dispatch

export const useAppDispatch : ()=> Appdispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export { store }