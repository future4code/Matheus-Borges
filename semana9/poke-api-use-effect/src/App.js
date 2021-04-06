import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { baseUrl } from './constants/Constants';
import PokeCard from './components/PokeCard/PokeCard';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      try{
        const response = await axios.get(baseUrl)
        setPokeList(response.data.results)
      }catch(err){
        console.log(err)
      }
    }
  getPokemon()        
  },[pokeList]);

const changePokeName = (event) => {
  setPokeName(event.target.value)
};

  return (
    <div>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
  );
}

export default App;
