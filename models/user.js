import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import { hashErrorLabel } from '../helpers/constants.js'

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true}
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.pre("save", async function(next){

    const user = this;
    
    if(!user.isModified('password')) return next();

    try {
        const salt = await bcryptjs.genSaltSync(10);
        const hash = await bcryptjs.hashSync(user.password, salt);

        user.password = hash;

        next();    
    } catch (error) {
        console.log(hashErrorLabel + error)
    }
})

export const User = mongoose.model('User', userSchema)