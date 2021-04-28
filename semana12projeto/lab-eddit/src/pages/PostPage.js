import React from 'react'
import { Box } from '@chakra-ui/layout'
import MenuIten from '../components/MenuIten'
import useProtectedPage from '../hooks/useProtectedPage'


const PostPage = () => {
  useProtectedPage()

    return (
      <Box color='white' minH='563px' bg='brand.600'>
        <MenuIten/>
        <p>PostPage</p>
      </Box>
    )
  }
  
  export default PostPage