import express from 'express'
import '../src/database'

const app = express();

app.listen(3333, () => {
    console.log('Servidor no ar!')
})