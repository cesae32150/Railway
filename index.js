import  express  from "express";

const app= express()
app.get('/Railway', (req, res)=>res.send('Hola desde Railway'))
app.listen(3000)
