import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { baseUrl } from './constants/Constants';
import PokeCard from './components/PokeCard/PokeCard';
import { DivContainer } from './components/PokeCard/styled';
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './components/PokeCard/styled'
import { Select } from "@chakra-ui/react"
import { Flex, Spacer, Center, Square, Box } from "@chakra-ui/react"


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
    <ChakraProvider theme={theme}>
      <Flex 
        color='brand.900'
        direction='column' 
        textAlign="center" 
        alignItems="center"
        background="blue.100"
        >

        <Square w="200px" size="100px">

          <Select bg="brand.100" 
                borderColor="brand.900" 
                focusBorderColor="pink.300" 
                variant="outline" 
                placeholder="nenhum" 
                onChange={changePokeName}>
            {pokeList.map(pokemon => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              );
            })}
          </Select>

        </Square>
        {pokeName && <PokeCard pokemon={pokeName} />}

      </Flex>
    </ChakraProvider>
  );
}

export default App;
