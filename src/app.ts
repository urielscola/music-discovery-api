import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

export default app
