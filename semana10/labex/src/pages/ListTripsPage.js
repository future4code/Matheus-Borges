import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center, Button } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import {goToLastPage} from '../routes/coodinator' 

const ListTripsPage = () => {
  const history = useHistory();

  return (
      <Center>
        <p>ListTripsPage</p>
        <Button onClick={() => goToLastPage(history)}>Home</Button>
      </Center>

  );
}

export default ListTripsPage;
