import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
  }
  
  // Mock simulando um array de usuários no Banco de Dados
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.NORMAL,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users/all", (req: Request, res: Response) => {
    res
    .status(200)
    .send(users)
})

app.get("/users/:type", (req: Request, res: Response) => {
    try{
        const userTypes = req.params.type
        if(!(userTypes in UserType)){
            const result = users.filter((user) => user.type.includes(userTypes))
            res
            .status(200)
            .send(result)
        }
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