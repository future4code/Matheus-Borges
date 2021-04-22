import React from 'react'
import { Box, Center, Heading, IconButton, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './constants/Theme'
import Router from './routes/Router'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'



const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box 
      minH='625px'
      bgGradient={[
        "linear(to-tr, teal.100,#E9C5C7)",
        "linear(to-t, #FEEFF6, teal.400)",
        "linear(to-b, black, #090954)",
      ]}
      >
        
      <Router  />

      <Center h='100px' marginTop='30px' bg='black'>
        <Heading color='white'> Siga-nos nas redes sociais</Heading>
      </Center>

      <Center h='100px' bg='black'>
        <LinkBox>
          <LinkOverlay href="https://www.facebook.com/matheus.borges.75457081">
            <IconButton margin='10px' icon={<FaFacebook />} colorScheme='facebook'></IconButton>
          </LinkOverlay>
        </LinkBox>

        <LinkBox>
          <LinkOverlay href='https://twitter.com/TheusH7X5'>
            <IconButton margin='10px' icon={<FaTwitter />} colorScheme='telegram'></IconButton>
          </LinkOverlay>
        </LinkBox>

        <LinkBox>
          <LinkOverlay href='https://www.instagram.com/theush7x5/'>
            <IconButton margin='10px' icon={<FaInstagram />} colorScheme="white"
              bg='radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)' 
              _hover={'none'}>
            </IconButton>          
          </LinkOverlay>
        </LinkBox>

      </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
