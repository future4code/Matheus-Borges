import express, { Express, Request, Response } from "express";
import { AddressInfo } from "net";
import cors from 'cors'
import {countries} from "./countries";
import {country} from "./countries";

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response)=>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
    .status(200)
    .send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries

    try{

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Nenhum parâmetro foi passado")
        }

        if(req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes(req.query.name as string)
            )
        }
    
        if (req.query.capital) {
            result = result.filter(
               country => country.capital.includes(req.query.capital as string)
            )
         }
         
         if (req.query.continent) {
            result = result.filter(
               country => country.continent.includes(req.query.continent as string)
            )
         }
    
        res
        .status(200)
        .send(result)
    } catch(error) {
        res
        .status(400)
        .send({message: error.message})
    }

})

app.get("/countries/:id", (req: Request, res: Response) => {
    try{
        if(isNaN(Number(req.params.id))){
            throw new Error("Id deve ser um número")
        }
        const id = Number(req.params.id)

        const result = countries.find((country => country.id === id))
        
        if(!result){
            throw new Error("Não foi possível encontrar o país com o id especificado")
        }

        res
        .status(200)
        .send
        (result)
    } catch(error){
        res
        .status(400)
        .send({message: error.message})
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

