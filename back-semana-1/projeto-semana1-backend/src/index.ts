import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

type usuario = {
    nome: string,
    CPF: string,
    idade: number,
    saldo?: number,
    extrato?: []
}

let usuarios: usuario[] = [
    {
    "nome": "Matheus",
    "CPF": "451.615.618-07",
    "idade": 23
    }
]

app.get("/usuario/todos", (req: Request, res: Response) => {
    res
    .status(200)
    .send(usuarios)
})

app.post("/usuario/cadastro", (req: Request, res: Response) => {
    try {
        
        const nome = req.body.nome
        const CPF = req.body.CPF
        const idade = req.body.idade
        
        const novoUsuario = {
            nome,
            CPF,
            idade,
        }
        
        if(!(idade >= 18)){
            throw new Error("Usuário deve ter idade maior ou igual á 18 anos.")
        }

        usuarios.filter((CPF_duplicado) => {
            if(CPF_duplicado.CPF.includes(CPF)){
                throw new Error("CPF duplicado!")
            }
        })


        usuarios.push(novoUsuario)

        res
        .status(200)
        .send({
            message: "Usuário cadastrado com sucesso!",
            usuario: novoUsuario
        })
    } catch(error) {
        res
        .status(400)
        .send({
            message: error.message
        })
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