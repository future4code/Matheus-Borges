import React from 'react'
import { Center, Button, Box, Square, IconButton, Heading, Tooltip, Spinner, Image  } from "@chakra-ui/react"
import { MoonIcon, SunIcon, StarIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom"
import { goToTripListPage, goToAdminHomePage } from '../routes/coodinator'
import imagem_astronauta from '../Assets/Images/imagens-de-tela-de-fundo-astronautas-removebg-preview.png'


// Passo 01: importar o useHistory
// Passo 02: const history = useHistory() => guardar o histórico em uma variável
// Passo 03: Fazer uma função que dá o push no history usando a rota da página de destino
// Passo 04: Chamar essa função em algum lugar (botão)
// Passo Extra: Isolar funções em um arquivo separado (coordinator)

const HomePage = () => {
  const history = useHistory();

  return (
    <Box
    h='625px'>
      <Center>
        <Heading
        size='4xl'         
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text"
        >
          LabeX
        </Heading>
      </Center>
      <Center>
        <Image marginLeft='40px' marginTop='15px' objectFit="cover" src={imagem_astronauta} alt='astronauta'/> 
      </Center>
      <Center justifyContent='space-around' marginTop='-100px'>
        <Button
        variant='outline'
        color='white'
        borderColor='white'
        bgGradient={[
          "linear(to-b, teal.100,#E9C5C7)",
          "linear(to-t, #FEEFF6, teal.400)",
          "linear(to-tr, #009CD0, #090954)",
        ]}
        _hover={{
          borderColor:'#009CD0'
        }}
        _active={{
          bg:'#009CD0'
        }}
        rightIcon={<MoonIcon w={6} h={6} color='white'
        _hover={{
          borderColor:'#009CD0',
        }} />}     
        onClick={() => goToTripListPage(history)}>
          Ver Viagens
        </Button>

        <Button
        variant='outline'
        color='white'
        borderColor='white'
        bgGradient={[
          "linear(to-b, teal.100,#E9C5C7)",
          "linear(to-t, #FEEFF6, teal.400)",
          "linear(to-tr, #009CD0, #090954)",
        ]}
        _hover={{
          borderColor:'#009CD0'
        }}
        _active={{
          bg:'#009CD0'
        }}
        leftIcon={<StarIcon w={6} h={6} color='white'
        _hover={{
          borderColor:'#009CD0',
        }} />}     
        onClick={() => goToAdminHomePage(history)}>
          Área Admin
        </Button>
      </Center>
    </Box>
  );
}

export default HomePage;
