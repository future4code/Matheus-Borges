import React, {useState} from 'react'
import { Box, Center, Heading, Square, Stack, Text } from '@chakra-ui/layout'
import MenuIten from '../components/MenuIten'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import {Url_Base} from '../constants/Urls'
import { Button, Collapse, Image, Skeleton, Spinner } from "@chakra-ui/react"
import { FaUserCircle } from 'react-icons/fa'
import CreatePosts from '../components/CreatePosts'
import { goToPosts } from '../routes/coordinator'
import { useHistory } from 'react-router'
import { Tooltip } from "@chakra-ui/react"
import loading from '../assets/Images/preloader.gif'



const FeedPage = () => {
  useProtectedPage()

  const history = useHistory()

  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  const postFeed = useRequestData([], `${Url_Base}/posts`)

  const onClickPost = (postId) => {
    goToPosts(history, postId)
  }

  const postFeedCards = postFeed.posts && postFeed.posts.map((posts) => {
    return  <Center key={posts.id} bg='brand.600'>
              <Box ml='10' minH='200' w='70%' mt='6' borderRadius='10px' bg='brand.500'>
                <Center mt='1'>
                  <FaUserCircle color='#DD6B20'/>
                  <Text ml='2' mr='5'><b>{posts.username}</b></Text>
                </Center>
                <Stack mt='5'>
                  <Skeleton startColor="gray.300" endColor="brand.100" height="2px" mr='1%' ml='1%'/>
                </Stack>
                <Tooltip hasArrow label="Ver comentários" bg="brand.900" placement='top-end' color="brand.100">
                  <Square>
                    <Text onClick={() => onClickPost(posts.id)} cursor='pointer' mt='1' noOfLines={[1]}>{posts.title}</Text>
                  </Square>
                </Tooltip>

                <Stack mt='5' mr='1%' ml='1%'>
                  <Skeleton startColor="gray.300" endColor="brand.100" height="2px" />
                </Stack>
                <Box ml='5' mt='5'>
                <Tooltip hasArrow label="Ver comentários" bg="brand.900" placement='top-end' color="brand.100">

                  <Collapse  onClick={() => onClickPost(posts.id)} startingHeight={20} in={show}>{posts.text}</Collapse >
                </Tooltip>
                  <Button bg='brand.100' size="sm" onClick={handleToggle} mt="1rem">
                   Ver {show ? "menos..." : "mais..."}
                  </Button>
                </Box>
              </Box>
            </Center>
  })

    return (
      <Box color='white' minH='563px' bg='brand.600'>
        <MenuIten/>
        <CreatePosts />
          {postFeedCards ? postFeedCards : 
            <Center mt='40'> 
              <Image src={loading}/>
              <Heading ml='5' color='brand.100'>Carregando Postagens...</Heading>
            </Center>
            }
      </Box>
    )
  }
  
  export default FeedPage