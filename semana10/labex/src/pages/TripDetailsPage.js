import React, { useEffect, useState } from 'react'
import { Center, Box, Heading, Text, Button, Square } from "@chakra-ui/react"
import { Base_Url } from '../constants/Urls'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {useParams} from 'react-router-dom'


const TripDetailsPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [trip, setTrip] = useState([])

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
      console.log(res.data.trip)
      setTrip(res.data.trip)
    }).catch((error) => {
      console.log(error)
    })
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  
  return (
    <Box h='625px'>
      <Box w='1355px'>
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
      </Box>
      <Box
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
        h='180px' 
        marginTop='150px'  
        marginLeft='465px'  
        color='white'>
        <Text>{trip.name}</Text>
        <Text>Duração: {trip.age}</Text>
      </Box>
    </Box>
  );
}

export default TripDetailsPage;
