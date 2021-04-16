import React, { useState } from 'react'
import { Box, Button, Center, Heading, Input, Select } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { countries } from '../constants/Countries'
import { goToTripListPage } from '../routes/coodinator'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { Base_Url } from '../constants/Urls'
import { useRequestData } from '../Hooks/useRequestData' 


const applicationForm = { nome: '', idade: '', descricao: '', profissao: '', selectViagem: '', selectPais: '' }

const ApplicationFormPage = () => {
  const [form, setForm] = useState(applicationForm)
  const [tripId, setTripId] = useState('')

  const TripsSelect = useRequestData('/trips', {})


  const history = useHistory()
  const params = useParams()

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleChangeTrip = (event) => {
    setTripId(event.target.value)
  }

  const fazerAplicacao = (id) => {
    const token = window.localStorage.getItem('token')
    const body = {
      name: form.nome,
      age: form.idade,
      description: form.descricao,
      profission: form.profissao,
      country: form.selectPais
    }
      axios
        .post(`${Base_Url}/trips/${params.id}/apply`, body, {
          headers:{
            auth: token
          }
        })
        .then((res) => {
          alert(res.data.massage)
        })
        .catch((error) => {
          console.log(error.response)
        })
      }


  return (
    <Box h='625px'>
      <Center>
        <Heading
            marginTop='50px'
            bgGradient={[
              "linear(to-tr, teal.300,orange.200)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, #009CD0, yellow.300)",
            ]}
            bgClip="text" 
            >
              Inscrição
        </Heading>
      </Center>
      <Box marginTop='30px' w='400px' marginLeft='480px'>
      <Select
        name='selectViagem'
        value={form.selectViagem}
        onChange={handleChangeTrip} 
        borderRadius='10px'
        borderColor='#009CD0'
        variant="flushed" 
        color='gray.400' 
        icon={<ChevronDownIcon />} 
        placeholder="Escolha uma viagem!" 
        >
        {TripsSelect.trips && TripsSelect.trips.map((trips) => {
          return <option key={trips.id} value={trips.id}>{trips.name}</option>
        })}
        </Select>
        <Input
          isRequired
          name='nome'
          value={form.nome}
          onChange={handleInputChange} 
          type='text'
          color='white' 
          variant="flushed" 
          placeholder="Nome"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='20px'
        />
        <Input 
          name= 'idade'
          value={form.idade}
          onChange={handleInputChange}
          type='number' 
          color='white' 
          variant="flushed" 
          placeholder="Idade"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='20px'
        />
        <Input 
          name= 'descricao'
          value={form.descricao}
          onChange={handleInputChange} 
          type='text'
          color='white' 
          variant="flushed" 
          placeholder="Descrição"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='20px'
        />
        <Input 
          name='profissao'
          value={form.profissao}
          onChange={handleInputChange} 
          type='text'
          color='white' 
          variant="flushed" 
          placeholder="Profissão"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='20px'
        />
        <Select 
          name='selectPais'
          value={form.selectPais}
          onChange={handleInputChange} 
          borderRadius='10px'
          borderColor='#009CD0'
          variant="flushed"
          marginTop='20px' 
          color='gray.400' 
          icon={<ChevronDownIcon />} 
          placeholder="Escolha um País" 
        >
          {countries.map((country) => {
              return <option key={country}>{country}</option>
          })}
        </Select>
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
        onClick={() => goToTripListPage(history)}>
          Ver Viagens
        </Button>

        <Button
          onClick={fazerAplicacao} 
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
          marginTop='20px' 
          marginLeft='150px'>
            Inscrever
        </Button>
      </Box>
    </Box>
  );
}

export default ApplicationFormPage;
