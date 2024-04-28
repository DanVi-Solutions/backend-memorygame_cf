import express from 'express';
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();

import userRoute from './routes/user.route.js';
import swaggerRoute from './routes/swagger.route.cjs';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/user', userRoute);
app.use('/doc', swaggerRoute);

connectDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));