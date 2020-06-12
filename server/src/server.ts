import express, { request, response } from 'express';
import { errors } from 'celebrate'
import cors from 'cors'
import routes from './routes'
import path from 'path'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

const port = process.env["PORT"] || 3333
app.listen(port)
