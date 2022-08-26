import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { Col, Spin } from 'antd'
import { getPokemons } from './api'
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions'
import { TypeState } from './reducers/pokemon'
import logo from './statics/logo.svg'
import './App.css'

function App() {
  const pokemons = useSelector((state)=>state.get('pokemons')).toJS()
  const loading = useSelector((state)=>state.get('loading'))
  const dispath = useDispatch();
  useEffect(()=>{
    async function fetchPokemon(){
        dispath(setLoading(true))
        const pkmns = await getPokemons();
        dispath(getPokemonsWithDetails(pkmns))
        dispath(setLoading(false))
    } 
    fetchPokemon();
  },[])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      {loading?
      <Col offset={12} >
        <Spin spinning size='large' />
      </Col>
      :
      <PokemonList pokemons={pokemons} />
      }
    </div>
  )
}


export default App;
