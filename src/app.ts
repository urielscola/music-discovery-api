import 'dotenv/config'
import cors from 'cors'
import express, { Errback, NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import router from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({ message: 'Page Not Found' })
// })

export default app
