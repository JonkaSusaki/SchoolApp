import express from 'express'
const app = express()

import './database/connection.ts'
import 'reflect-metadata'
import cors from 'cors'

import routes from './routes'

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Backend Rodando...')
})