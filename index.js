import 'dotenv/config'
import './database/connectdb.js'
import express  from "express";
import authRouter from './routes/auth.route.js'

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRouter);



app.listen(port, () => console.log(`🚀 http://localhost:${port} 🔥`))