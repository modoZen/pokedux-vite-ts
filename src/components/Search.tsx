import { Input } from "antd";
import { useAppDispatch, useAppSelector } from "../slices";
import { setSearched } from "../slices/dataSlice";

const Search = ()=>{
    const searched = useAppSelector(state=>state.data.searched)
    const dispatch = useAppDispatch();
    const handler = (event:any)=>{
        console.log(event.target.value)
        dispatch(setSearched(event.target.value))
    }
    return <Input.Search value={searched} onChange={handler} placeholder="Buscar..." style={{marginBottom: 10}}/>
}

export {
    Search
}