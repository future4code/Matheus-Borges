import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Button, Spinner } from "@chakra-ui/react"
import { Base_Url } from '../constants/Urls'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {useParams} from 'react-router-dom'

const CardCandidates = (props) => {

    const params = useParams()


    const { id, idTrip, applicationText, profession, age, name, country } = props.candidate

    const addCandidate = (decison) => {
        const token = window.localStorage.getItem('token')
        
          const body = {
            approve: decison
          }
      
        axios.put(`${Base_Url}/trip/${params.id}/candidates/${id}/decide`, body,{
          headers:{
            auth: token
          }
        }).then((res) => {
          console.log(res.data, 'decisao registrada')
        }).catch((error) => {
          console.log(error)
        })  
      }

    return(
        <Box>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            
                <Button onClick={() => addCandidate(true)}>Aprovar</Button>
                <Button onClick={() => addCandidate(false)}>Reprovar</Button>
        </Box>
    )
}

export default CardCandidates;