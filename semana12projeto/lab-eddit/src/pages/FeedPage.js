import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import MenuIten from '../components/MenuIten'
import useProtectedPage from '../hooks/useProtectedPage'

const FeedPage = () => {
  useProtectedPage()

    return (
      <Box color='white' minH='563px' bg='brand.600'>
        <MenuIten/>
        <Text >FeedPage</Text>
      </Box>
    )
  }
  
  export default FeedPage