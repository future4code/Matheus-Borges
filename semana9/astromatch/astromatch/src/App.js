import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 
{ ChakraProvider,
  Center,
  Flex,
  Box,
  Button,
  Text,
  Spinner,
  IconButton,
  Heading 
}from "@chakra-ui/react"
import { TelaJogo } from './components/TelaJogo'
import { ListaMatch } from './components/ListaMatch'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useMediaQuery } from "@chakra-ui/react"


function App() {
  const [telaAtual, setTelaAtual] = useState('telaJogo');


  const SelecionarPagina = () => {
    switch(telaAtual){
      case 'listaMatch':
        return <ListaMatch/>
      case 'telaJogo':
        return <TelaJogo/>
      default:
        return <ListaMatch/>
    }
  }

  const irParaListaMatch = () => {
    if (telaAtual === 'telaJogo'){
      setTelaAtual('listaMatch')
    }else if (telaAtual === 'listaMatch'){
      setTelaAtual('telaJogo')
    }
  }

  return (
    <ChakraProvider>
      <Flex
      maxW='1360px'
      justifyContent='center' 
      bgGradient="linear(to-l, #01ECF0, #FF0080)"
      h='625px'
      >
        <Box
        marginTop='20px'
        bgGradient="linear(to-r, #01ECF0, #FF0080)"
        h='570px'
        border='1px solid'
        borderColor='black'
        borderRadius='10px'
        >
        
          <IconButton
          icon={<ChevronLeftIcon/> }
          w={9} h={9}
          color='black'
          bgGradient="linear(to-r, #FF0080, #01ECF0)"          
          margin='5px'
          padding='5px'
          _hover={{
            color:'#FF0080'
          }}
          _active={{
            bgGradient:"linear(to-l, #FF0080, #01ECF0)",          
            color:'black'
          }} 
          onClick={irParaListaMatch}
          />
          <Heading
          marginTop='-35px'
          marginLeft='140px'
          bgGradient="linear(to-l, #FF0080, #01ECF0)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
          >AstroMatch
          </Heading>
          <Center 
          flexDirection='column'
          >
          {SelecionarPagina()}
          </Center>
        </Box>

      </Flex>
    </ChakraProvider>
  );
}

export default App;