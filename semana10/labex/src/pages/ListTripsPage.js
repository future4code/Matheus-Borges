import React from 'react'
import { Center, Button, Box, Heading, Spinner, Text, LinkBox, LinkOverlay, Tooltip  } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToLastPage, goToApplicationPage } from '../routes/coodinator'
import { useRequestData } from '../Hooks/useRequestData' 

const ListTripsPage = () => {
  const history = useHistory();

  const goToDetailPage = (id) => {
    history.push(`/details/${id}`)
  }

  const tripsList = useRequestData('/trips', {})

  const tripsComponents = tripsList.trips && tripsList.trips.map((trips) => {
    return <Tooltip
    key={trips.name} 
    hasArrow label="Clique e faça o Login para saber sobre os candidatos!"
    placement="right-start" 
    bgGradient={[
      "linear(to-b, teal.100,#E9C5C7)",
      "linear(to-t, #FEEFF6, teal.400)",
      "linear(to-tr, #009CD0, #090954)",
    ]}  color="white">
              <LinkBox
                cursor='pointer'
                as="article"
                bgGradient={[
                  "linear(to-b, teal.100,#E9C5C7)",
                  "linear(to-t, #FEEFF6, teal.400)",
                  "linear(to-tr, #009CD0, #090954)",
                ]} 
                border='2px solid #009CD0' 
                padding='5px' 
                borderRadius='15px' 
                w='440px' 
                h='160px' 
                marginTop='30px' 
                marginLeft='460px'  
                color='white'>
                <LinkOverlay onClick={() => goToDetailPage(trips.id)}>
                  <Text>Viagem: {trips.name}</Text>
                  <Text>Planeta: {trips.planet}</Text>
                  <Text>Descrição: {trips.description}</Text>
                  <Text>Duração: {trips.durationInDays}</Text>
                  <Text>Data: {trips.date}</Text>
                </LinkOverlay>
              </LinkBox>
            </Tooltip>
  })
  return (
    <Box
    h='970px'>
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
        onClick={() => goToApplicationPage(history)}>Inscrever-se</Button>
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
      </Center>
        {tripsComponents && tripsComponents.length > 0 ? tripsComponents 
        : 
        <Spinner
        marginTop='100px'
        marginLeft='650px'   
        thickness="4px"
        speed="0.75s"
        emptyColor="gray.200"
        color="#009CD0"
        size="xl"
        />}
    </Box>
  );
}

export default ListTripsPage;
