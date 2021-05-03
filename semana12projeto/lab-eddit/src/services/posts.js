import axios from 'axios'
import { useParams } from 'react-router'
import { Url_Base } from '../constants/Urls'

export const posts = (body, clear, toast) => {

    axios.post(`${Url_Base}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        toast({
            title: `Post compartilhado com sucesso!`,
            variant: 'left-accent',
            status: 'success',
            description: `Post compartilhado com sucesso!`,
            duration: 5000,
            position:"bottom-right",
            isClosable: true,
          })
          clear()
    })
    .catch((err) => {
        toast({
            title: `Erro ao fazer Postagem!`,
            description: `${err.response.data.message}!`,
            duration: 3000,
            status: 'error',
            variant: 'left-accent',
            position:"bottom-left",
            isClosable: true,
        })
    })
}


export const Comments = (body, clear, toast, postComments) => {
    console.log(postComments)

    axios.post(`${Url_Base}/posts/${postComments}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        toast({
            title: `Comentário enviado com sucesso!`,
            variant: 'left-accent',
            status: 'success',
            description: `Comentário enviado com sucesso!`,
            duration: 5000,
            position:"bottom-right",
            isClosable: true,
          })
          clear()
    })
    .catch((err) => {
        toast({
            title: `Erro ao enviar Comentário!`,
            description: `${err.response.data.message}!`,
            duration: 3000,
            status: 'error',
            variant: 'left-accent',
            position:"bottom-left",
            isClosable: true,
        })
    })
}
