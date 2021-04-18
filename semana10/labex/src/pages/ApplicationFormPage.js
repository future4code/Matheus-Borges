import React, { useState } from 'react'
import { Box, Button, Center, Heading, Input, Select, useToast } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { countries } from '../constants/Countries'
import { goToTripListPage } from '../routes/coodinator'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { Base_Url } from '../constants/Urls'
import { useRequestData } from '../Hooks/useRequestData' 


const inicialForm = { nome: '', idade: '', descricao: '', profissao: '', selectPais: '' }

const ApplicationFormPage = () => {
  const [form, setForm] = useState(inicialForm)
  const [tripId, setTripId] = useState('')

  const status = ["success", "error", "warning", "info"]
  const toast = useToast()

  const tripsSelect = useRequestData(`/trips`, {})

  const history = useHistory()
  const params = useParams()

  
  const handleChangeTrip = (event) => {
    setTripId(event.target.value)
  }
  
  const fazerAplicacao = () => {
    const token = window.localStorage.getItem('token')
    const body = {
      name: form.nome,
      age: form.idade,
      applicationText: form.descricao,
      profession: form.profissao,
      country: form.selectPais
    }
    axios
    .post(`${Base_Url}/trips/${tripId}/apply`, body, {
      headers:{
        auth: token
      }
    })
    .then((res) => {
      const subscriptionAlert = tripsSelect.trips.filter(trip => trip.id === tripId)
        toast({
            title: 'Cadastrado com Sucesso!',
            variant: 'left-accent',
            status: 'success',
            description: `Sua inscrição está em ${subscriptionAlert[0].name}`,
            duration: 9000,
            position:"bottom-right",
            isClosable: true,
          }
        )
        setForm(inicialForm)
        setTripId('') 
      })
      .catch((error) => {
        toast({
          title: `Erro ao Fazer inscrição!`,
          description: `Certifique-se que todos os campos foram preenchidos corretamente!`,
          status: 'error',
          variant: 'left-accent',
          position:"bottom-left",
          isClosable: true,
        })
    })
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };


  return (
    <Box>
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
      <Box marginTop='30px' >

      <Select
        marginLeft='470px'
        w='400px'      
        value={tripId}
        onChange={handleChangeTrip} 
        borderRadius='10px'
        borderColor='#009CD0'
        variant="flushed" 
        color='gray.400'
        icon={<ChevronDownIcon />} 
        placeholder="Escolha um Destino!" 
        >
        {tripsSelect.trips && tripsSelect.trips.map((trips) => {
          return <option key={trips.id} value={trips.id}>{trips.name}</option>
        })}
        </Select>
        <Input
          marginLeft='470px'
          w='400px' 
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
          marginLeft='470px'
          w='400px'  
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
          marginLeft='470px'
          w='400px'  
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
          marginLeft='470px'
          w='400px'  
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
          marginLeft='470px'
          w='400px'  
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
        marginLeft='470px'
        marginTop='20px' 
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
          marginLeft='182px'>
            Inscrever
        </Button>
      </Box>
    </Box>
  );
}

export default ApplicationFormPage;
