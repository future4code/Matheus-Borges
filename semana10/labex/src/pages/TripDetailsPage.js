import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Button, Spinner } from "@chakra-ui/react"
import { Base_Url } from '../constants/Urls'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import { goToTripListPage } from '../routes/coodinator'
import CardCandidates from './CardCandidates'


const TripDetailsPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [trip, setTrip] = useState([])
  const [candidatesId, setCandidatesId] = useState([])

  const params = useParams()

  useEffect(() => {
    getTripDetail()
  }, [])

  const getTripDetail = () => {
    const token = window.localStorage.getItem('token')
    axios.get(`${Base_Url}/trip/${params.id}`, {
      headers:{
        auth: token
      }
    }).then((res) => {
      setTrip(res.data.trip)
      setCandidatesId(res.data.trip.candidates)
    }).catch((error) => {
      console.log(error)
    })
  }


  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }
  

  const candidatesMapId = getTripDetail && getTripDetail.trip && getTripDetail.trip.candidates.map((candidatesDecison) => {
    console.log(candidatesDecison)
    return <CardCandidates 
    id={candidatesDecison.id}
    idTrip={trip}
    />
  })
  
  const componentsCandidates = trip.candidates && trip.candidates.map((trips) => {
    return   <Box 
    key={trips.id} 
    as="article"
    bgGradient={[
      "linear(to-b, teal.100,#E9C5C7)",
      "linear(to-t, #FEEFF6, teal.400)",
      "linear(to-tr, #009CD0, #090954)",
    ]} 
    border='2px solid #009CD0' 
    padding='10px' 
    borderRadius='15px' 
    w='440px' 
    h='170px' 
    marginTop='50px'  
    marginLeft='465px'  
    color='white'>
                  <Text>Candidato: {trips.name}</Text>
                  <Text>Idade: {trips.age}</Text>
                  <Text>Profissão: {trips.profession}</Text>
                  <Text>Descrição: {trips.applicationText}</Text>
                  <Text>País: {trips.country}</Text>

              </Box> 
  })
  
  return (

    <Box minH='625px'>
      <Box>
        <Heading
          bgGradient={[
            "linear(to-tr, teal.300,orange.200)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, #009CD0, yellow.300)",
          ]}
          bgClip="text" 
          marginLeft='550px'>
            TripDetailsPage
        </Heading>
        {candidatesMapId && candidatesMapId.length > 0 ? candidatesMapId : <p>Não há candidatos pendentes</p>}        <Button
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
          marginTop='-115px' 
          marginLeft='40px'
          onClick={() => goToTripListPage(history)}>
            Ver Viagens
        </Button>
      </Box>
      {componentsCandidates && componentsCandidates.length > 0 ? componentsCandidates 
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

export default TripDetailsPage;
