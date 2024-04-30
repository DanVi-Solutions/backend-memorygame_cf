import express from 'express';
import connectDatabase from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes/index.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

connectDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));