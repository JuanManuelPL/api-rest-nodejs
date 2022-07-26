import express from 'express'
import {login, register} from '../controllers/auth.controller.js'
import { validationResultExpress } from '../middlewares/validationResult.js'
import {body} from 'express-validator'

const router = express.Router()

router.post('/register',
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'Formato de contraseña incorrecta')
            .trim()
            .isLength({min: 8})

    ], 
    validationResultExpress,
    register
)

router.post('/login',
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'Formato de contraseña incorrecta')
            .trim()
            .isLength({min: 8})
    ], 
    validationResultExpress,
    login
)

export default router;