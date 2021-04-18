import React, { useState } from 'react'
import { Box, Center, Heading, Button, Input, Select, useToast } from "@chakra-ui/react"
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { useRequestData } from '../Hooks/useRequestData'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { goToLastPage } from '../routes/coodinator'
import { Base_Url } from '../constants/Urls'
import axios from 'axios'


const inicialFormCreateTrip = { nome: '', planeta: '', data: '', descricao: '', duracao: '' }

const CreateTripPage = () => {
  const [form, setForm] = useState(inicialFormCreateTrip)
  // const [planetId, setPlanetId] = useState('')
  const status = ["success", "error", "warning", "info"]
  const toast = useToast()


  useProtectedPage()
  const history = useHistory()
  const params = useParams()

  const planetSelect = useRequestData(`/trips`, {})

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const fazerInscricao = () => {
    const token = window.localStorage.getItem('token')
    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.descricao,
      durationInDays: form.duracao
    }
    axios
      .post(`${Base_Url}/trips`, body, {
        headers:{
          auth: token
        }
      })
      .then((res) => {
          toast({
              title: 'Viagem criada com Sucesso!',
              variant: 'left-accent',
              status: 'success',
              description: `Sua viagem para ${form.planeta} foi para lista de viagens `,
              duration: 9000,
              position:"bottom-right",
              isClosable: true,
            }
          )
          setForm(inicialFormCreateTrip)
        })
      .catch((error) => {
        toast({
          title: `Erro ao criar viagem!`,
          description: `Certifique-se que todos os campos foram preenchidos corretamente!`,
          status: 'error',
          variant: 'left-accent',
          position:"bottom-left",
          isClosable: true,
        })
    })

  }

  // const handleChangePlanet = (event) => {
  //   setPlanetId(event.target.value)
  // }

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <Box>
      <Center>
      <Heading
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text" 
        >
          Crie sua Viagem
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
        <Box marginTop='30px'>

          <Input
          marginLeft='470px'
          w='400px'
          name='nome'
          value={form.nome}
          onChange={handleInputChange} 
          type='text'
          color='white' 
          variant="flushed" 
          placeholder="Nome da viagem!"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='30px' />

          <Select
          marginLeft='470px'
          w='400px'
          name='planeta'
          value={form.planet}
          onChange={handleInputChange} 
          marginTop='30px' 
          borderRadius='10px'
          borderColor='#009CD0'
          variant="flushed" 
          color='gray.400'
          icon={<ChevronDownIcon />} 
          placeholder="Escolha um Planeta!"
          >
          <option value='Mercúrio'>Mercúrio</option>
          <option value='Vênus'>Vênus</option>
          <option value='Terra'>Terra</option>
          <option value='Marte'>Marte</option>
          <option value='Júpter'>Júpter</option>
          <option value='Saturno'>Saturno</option>
          <option value='Urano'>Urano</option>
          <option value='Netuno'>Netuno</option>
          </Select>

          <Input
          marginLeft='470px'
          w='400px'
          name='data'
          value={form.data}
          onChange={handleInputChange}  
          type='date'
          color='gray.400' 
          variant="flushed" 
          placeholder="Data"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='30px'
          />

          <Input
          marginLeft='470px'
          w='400px'
          name='descricao'
          value={form.descricao}
          onChange={handleInputChange} 
          type='text'
          color='white' 
          variant="flushed" 
          placeholder="Descrição"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='30px' 
          />

          <Input
          marginLeft='470px'
          w='400px'
          name='duracao'
          value={form.duracao}
          onChange={handleInputChange} 
          type='number'
          color='white' 
          variant="flushed" 
          placeholder="Duração em dias"
          borderRadius='10px'
          borderColor='#009CD0'
          marginTop='30px' />

          <Center>

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
          marginTop='30px'
          onClick={() => goToLastPage(history)}>
            Voltar
          </Button>

          <Button
          marginLeft='250px'
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
          marginTop='30px'
          onClick={fazerInscricao}
          >
            Criar
          </Button>
          </Center>
        </Box>
    </Box>
  );
}

export default CreateTripPage;
