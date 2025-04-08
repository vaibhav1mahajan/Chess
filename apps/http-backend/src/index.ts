import express from "express";
import cookieParser from 'cookie-parser';
import {config} from 'dotenv';
import cors from 'cors';
// import routes
import authRouter  from './routes/auth'


const app = express();
const PORT = process.env.PORT || 3000;
config();

app.use(express.json({ limit: "10mb" })); // Increase limit as needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});