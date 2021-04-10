import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 
{   ChakraProvider, 
    Text, 
    Image, 
    Center, 
    Spinner, 
    StackDivider,
    Square,
    Circle,
    Container   
} from "@chakra-ui/react"
import { Base_Url } from '../constants/Constants'


export function ListaMatch(props) {

    const [matches, setMatches] = useState([])

    const pegarMatches = async () => {
        try{
            const response = await axios.get(`${Base_Url}/matches`)
            setMatches(response.data.matches)
            console.log(response.data.matches)
        }catch(error){
            console.log(error.response)
        }
    }

    useEffect(() => {
        pegarMatches()
      }, [])

      const deuMatch = matches.map((match) => {
          return(
            <Container  
            border='1px solid'
            borderColor='#FF0080'
            padding='5px'
            w='370px' 
            margin='2'
            borderRadius='10px'
            _hover={{
                borderColor:'blue.100',
                cursor:'pointer',
                padding:'6px'
            }}
            >
                <Image w='80px' h='60px' src={match.photo} />
                <Text
                fontWeight="extrabold"
                >
                    {match.name}
                </Text>
              <Text>{match.bio}</Text>
          </Container  >
          );
      })
    return (
      <ChakraProvider>
          {deuMatch ? 
          (
              <Text>
                  {deuMatch}
              </Text>
          ) :
        <Center>
            <Spinner   
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500" 
            marginTop='120px'
            />
        </Center>
        }
      </ChakraProvider>
    );
  }
  
