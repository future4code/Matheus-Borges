import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center, Button, Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToTripList } from '../routes/coodinator'

// Passo 01: importar o useHistory
// Passo 02: const history = useHistory() => guardar o histórico em uma variável
// Passo 03: Fazer uma função que dá o push no history usando a rota da página de destino
// Passo 04: Chamar essa função em algum lugar (botão)
// Passo Extra: Isolar funções em um arquivo separado (coordinator)

const HomePage = () => {
  const history = useHistory();

  return (
    <Box >
      <Center>
        <p>HomePage</p>
        <Button     
        bgGradient={[
          "linear(to-b, teal.100,#E9C5C7)",
          "linear(to-t, #FEEFF6, teal.400)",
          "linear(to-tr, blue.900, #BEC4E4)",
        ]}
        _hover={{
          bgGradient:[
            "linear(to-tr, teal.100,#E9C5C7)",
            "linear(to-t, #FEEFF6, teal.400)",
            "linear(to-b, blue.900, #BEC4E4)",
          ]
        }}
        _active={{
          bgGradient:[
            "linear(to-b, teal.100,#E9C5C7)",
            "linear(to-t, #FEEFF6, teal.400)",
            "linear(to-tr, blue.900, #BEC4E4)",
          ]
        }}
        onClick={() => goToTripList(history)}>lista viagens</Button>
      </Center>
    </Box>
  );
}

export default HomePage;
