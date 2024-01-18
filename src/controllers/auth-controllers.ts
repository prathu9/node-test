import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(403).send({message: "All fields are mandatory"});
    }

    res.status(200).send({message: "Login successful"});
}
