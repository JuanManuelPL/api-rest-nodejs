import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connected DB ❤️')
} catch (error) {
    console.log(`DB error 🤡 ${error}`)
}