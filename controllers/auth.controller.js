import { validationResult } from 'express-validator';

export const login = (req, res) => {

    console.log(`${JSON.stringify(req.body)}`)

    res.json({ ok : 'login' })
};

export const register = (req, res) => {

    const errors = validationResult(req)
    console.log(`${JSON.stringify(req.body)}`)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})        
    }

    res.json({ ok : 'register' })
};