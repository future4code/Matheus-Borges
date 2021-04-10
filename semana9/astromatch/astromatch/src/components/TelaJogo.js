import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 
{ ChakraProvider,
  Button, 
  Center, 
  Text, 
  Flex, 
  Image, 
  Spinner, 
  IconButton, 
  Tooltip 
} 
from "@chakra-ui/react"
import { CloseIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Base_Url } from '../constants/Constants'
import imagem_coracao from '../assets/favorite_border_white_24dp.svg'
import imagem_limpar from '../assets/clear_all_white_24dp.svg'


export function TelaJogo(props) {
  const [usuario, setUsuario] = useState({})



  const pegarUsuario = async () => {
    try {
      const response = await axios.get(`${Base_Url}/person`)
      setUsuario(response.data.profile)
      console.log(response.data)
    }catch (error){
      console.log(error.response)
    }
  }

  const escolherUsuario = async (usuarioId, escolhaUsuario) => {
    const body= {
      id: usuarioId,
      choice: escolhaUsuario
    }
    console.log(body)
    try {
      const response = await axios.post(`${Base_Url}/choose-person`, body)
      pegarUsuario()
    }catch(error){
      console.log(error.response)
    }
  }

  const limparMatches = async () => {
    try{
      const response = await axios.put(`${Base_Url}/clear`)
    }catch(error){
      console.log(error.response)
    }
  }

  useEffect(() => {
    pegarUsuario()
  }, [])


    return (
      <ChakraProvider>
        {usuario.name && usuario.bio && usuario.age && usuario.photo ?
        (
          <Center 
          flexDirection='column'
          marginTop='25px'
          w='390px'
          >
            <Image w='360px'
                    h='350px' src={usuario.photo}/>
            <Text
            marginTop='5px' 
            color="black"
            fontSize="2xl"
            fontWeight="extrabold" 
            as="abbr">
              {usuario.name} {usuario.age}
            </Text>
            <Text
            marginLeft='25px'
            color="black"
            fontWeight="extrabold" 
            as="abbr">
              {usuario.bio}
            </Text>
          </Center>

        ): 
        <Center >
          <Spinner   
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500" 
              marginTop='120px'
          />
        </Center>
      }
        <Center
        position='absolute'
        justifyContent='space-around' 
        marginTop='520px'
        w='380px'
        >
          <IconButton onClick={() => escolherUsuario(usuario.id, false)}
          borderRadius='25px' 
          icon={<CloseIcon/>} 
          w='10px' 
          h='40px' 
          color='red'
          bg="white" 
          size='lg'
          border='1px solid'
          borderColor='red'
          _hover={{
            w:'10px',
            h:'20px',
            bg:'red',
            color:"white",
            border:'1px solid',
            borderColor:'white',
            padding:'5%',
          }}
          >
          </IconButton>
          <Image 
          bgGradient="linear(to-r, #FF0080, #01ECF0)" 
          borderRadius="full"
          boxSize="40px"         
          onClick={() => escolherUsuario(usuario.id, true)} 
          src={imagem_coracao} 
          _hover={{
            cursor:'pointer',
            boxSize:"42px"         
          }}
          _active={{
            bgGradient:"linear(to-l, #FF0080, #01ECF0)",          
            borderRadius:'20px'
          }}
          />
          <Tooltip label="Limpar Matches" aria-label="A tooltip" bgGradient="linear(to-r, #FF0080, #01ECF0)" 
>
          <Image
          w='40px' 
          h='40px' 
          onClick={limparMatches} 
          src={imagem_limpar} 
          _hover={{
            cursor:'pointer',
            h:'45px',
          }}
          />
          </Tooltip>
        </Center>
      </ChakraProvider>
    );
  }
  