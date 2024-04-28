const express = require('express');
const app = express();

const userRoute = require('./src/routes/user.route');
const connectDatabase = require('./src/database/db')

const port = 3000;

app.use(express.json());
app.use('/user', userRoute);

connectDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));