import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use('/user', userRoute);

connectDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));