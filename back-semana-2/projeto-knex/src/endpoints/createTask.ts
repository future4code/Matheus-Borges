import { Request, Response } from "express";
import moment from "moment";

export default async function createTask(
    req:Request, 
    res:Response
){

    try {

        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.status ||
            !req.body.limitDate ||
            !req.body.authorId 
        ){
            res
            .status(400)
            .send({
                message: '"Preencha" os campos "title", "description", "limitDate", "status" e "autorId"'
            })

            return
        }

        const dateDiff: number = moment(req.body.status, 'DD/MM/YYYY').unix() - moment().unix()
        console.log(dateDiff)

        if(dateDiff <= 0){
            res
            .status(400)
            .send({
                message: 'Tem que ser uma data futura'
            })
        }

        // res
        // .status(200)
        // .send(`Usuário criado com sucesso`)
        
    } catch (error) {
        res
        .status(400)
        .send({
            message: error.message || error.sqlMessage
        })
    }
}