import React from 'react'
import { Box, Center, Square, Stack, Text } from '@chakra-ui/layout'
import MenuIten from '../components/MenuIten'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import { Url_Base } from '../constants/Urls'
import { useParams } from 'react-router'
import { Skeleton } from '@chakra-ui/skeleton'
import { Image } from '@chakra-ui/image'
import loading from '../assets/Images/preloader.gif'
import { FaUserCircle } from 'react-icons/fa'
import CommentsForm from './CommentsForm'


const PostPage = () => {
  useProtectedPage()
  const params = useParams()


  const postComments = useRequestData([], `${Url_Base}/posts/${params.postId}`)

  
  const postCommentsCard = postComments.post && postComments.post.comments.length > 0 && postComments.post.comments.map((comments) => {
    return  <Center>
              <Box key={comments.id} minH='150' w='70%' mt='6' borderRadius='10px' bg='brand.500'>
                        <Center>
                        <FaUserCircle color='#DD6B20'/>
                        <Text ml='2' mr='5'><b>{comments.username}</b></Text>
                        </Center>
                        <Stack mt='5'>
                          <Skeleton startColor="gray.300" endColor="brand.100" height="2px" mr='1%' ml='1%'/>
                        </Stack>
                        <Box>
                          <Text ml='5' mt='5'>{comments.text}</Text>
                        </Box>
                        <Stack mt='10'>
                          <Skeleton startColor="gray.300" endColor="brand.100" height="2px" mr='1%' ml='1%'/>
                        </Stack>
                        <Center justifyContent='space-around'>
                          <Text mt='5' >{comments.votesCount}</Text>
                          <Text mt='5' >{comments.userVoteDirection}</Text>
                        </Center>
                      </Box> 
            </Center>
  })

    return (
      <Box color='white' minH='563px' bg='brand.600'>
        <MenuIten/>
        {postCommentsCard && postCommentsCard.length > 0 ? postCommentsCard 
        : 
        <Center><Image src={loading}/><Text>Carregando comentários...</Text></Center>}
        <Center>
          <CommentsForm postComments={postComments}/>
        </Center>
      </Box>
    )
  }
  
  export default PostPage