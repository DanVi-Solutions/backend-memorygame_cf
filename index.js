const express = require('express');
const app = express();
const connectDatabase = require('./src/database/db')

const port = 3000;

connectDatabase();
app.use(express.json());

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));