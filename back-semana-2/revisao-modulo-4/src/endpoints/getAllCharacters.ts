import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";

export default async function getAllCharacters(
    req: Request,
    res: Response
): Promise<void> {

    try {
        
        const name = req.query
    
        // const result: characters[] = await connection.raw("SELECT * FROM characters")
        // res
        //.send(result[0])
    
        const characters: character[] = await connection("characters")
    
        res
        .send(characters)

    } catch (error) {
        res
        .status(500)
        .send("Unexpected server error")
    }

}