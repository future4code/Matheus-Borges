import React from 'react'
import {Center, Box, Heading, Button, Image, Spinner} from "@chakra-ui/react"
import { useHistory } from 'react-router';
import { goToTripListPage, goToCreateTripPage } from '../routes/coodinator'
import imagem_astronauta from '../Assets/Images/imagens-de-tela-de-fundo-astronautas-removebg-preview.png'
import { useProtectedPage } from '../Hooks/useProtectedPage'


const AdminHomePage = () => {

  useProtectedPage()
  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  const history = useHistory()

  return (
    <Box h='625px'>
      <Center>
        <Heading
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text" 
        >
          Bem Vindo ao LabeX
        </Heading>
      </Center>
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
          marginLeft='1200px' 
          marginTop='-65px' 
          onClick={logout}>
            Logout
        </Button>
      <Center>
        {<Image marginTop='30px' objectFit="cover" src={imagem_astronauta} alt='astronauta'/> ? 
        <Image marginTop='30px' objectFit="cover" src={imagem_astronauta} alt='astronauta'/> 
        :
        <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        />}
      </Center>
      <Center w='900px' justifyContent='space-around' marginLeft='200px' marginTop='-100px'>
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
          marginLeft='40px'
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
          marginLeft='40px'
          onClick={() => goToCreateTripPage(history)}>
            Crie sua Viagem
        </Button>
      </Center>
    </Box>
  );
}

export default AdminHomePage;
