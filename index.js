import express from 'express';
const app = express();
const port = 3000;
const __dirname = import.meta.dirname;


app.use(express.json())

import usersRoutes from "./src/Routes/users.routes.js"

app.use(usersRoutes)

app.get ('/', (req, res) => {
    res.send('Api_rest_ful_MySQL')
})

app.use((req,res) => {res.status(404),send('pagina inexistente')})

app.listen(port, console.log('servidor http://Localhost: ${PORT}'))