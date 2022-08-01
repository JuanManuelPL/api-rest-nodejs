import { Router } from 'express'
import { login, register } from '../controllers/auth.controller.js'
import { validationResultExpress } from '../middlewares/validationResult.js'
import { body } from 'express-validator'
import { badEmailFormatLabel, badPasswordFormatLabel } from '../helpers/constants.js'
const router = Router()

router.post('/register',
    [
        body('email', badEmailFormatLabel)
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', badPasswordFormatLabel)
            .trim()
            .isLength({min: 8})

    ], 
    validationResultExpress,
    register
)

router.post('/login',
    [
        body('email', badEmailFormatLabel)
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', badPasswordFormatLabel)
            .trim()
            .isLength({min: 8})
    ], 
    validationResultExpress,
    login
)

export default router;