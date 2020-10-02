import { Router, Request, Response, NextFunction } from 'express'
import { mwLogger, mwErrorHandler } from './middlewares'

const router = Router()

router.use(mwLogger)

router.get('/', (req, res) => {
  res.json({ message: 'First commit' })
})

router.use((req, res) => {
  res.status(404).json({ message: 'Page Not Found' })
})

router.use(mwErrorHandler)

export default router
