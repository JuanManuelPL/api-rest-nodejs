import { User } from "../models/user.js";
import { registeredUserLabel, existingUserLabel } from "../helpers/constants.js";
export const login = async(req, res) => {

    console.log(`${JSON.stringify(req.body)}`)

    res.json({ ok : 'login' })
};

export const register = async(req, res) => {

    const { email, password } = req.body;
    let response = { message: registeredUserLabel, error: false};

    try {

        let user = await User.findOne({email});
        
        if(!user) {
            user = new User({email, password});
            await user.save();         
        }else {
            response.message = existingUserLabel;
            response.error = true;
            throw response;
        }

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json(response);
    }

};