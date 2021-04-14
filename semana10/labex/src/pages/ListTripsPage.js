import React from 'react'
import { Center, Button, Box, Heading } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import {goToLastPage, goToApplication} from '../routes/coodinator'
import {useRequestData} from '../Hooks/useRequestData' 

const ListTripsPage = () => {
  const history = useHistory();

  const tripsList = useRequestData('/trips', {})
  console.log(tripsList)

  const tripsComponents = tripsList.results && tripsList.results.map((trips) => {
    return <p>{trips.id}</p>
  })
  return (
    <Box>
      <Center justifyContent='space-around'>
        <Button
        marginTop='70px'
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
        onClick={() => goToLastPage(history)}>Voltar</Button>
        <Button
        marginTop='70px'
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
        onClick={() => goToApplication(history)}>Inscrever-se</Button>
      </Center>
      <Center>
        <Heading
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text" 
        marginTop='20px'>Lista de Viagens</Heading>
        {tripsList}
      </Center>
    </Box>
  );
}

export default ListTripsPage;
