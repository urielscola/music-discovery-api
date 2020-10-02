import { Router } from 'express'
import { mwLogger, mwErrorHandler } from '../middlewares'
import loginRoutes from './login-routes'

const router = Router()

router.use(mwLogger)

router.get('/', (req, res) => {
  res.json({ message: 'First commit' })
})

router.use('/login', loginRoutes)

router.use((req, res) => {
  res.status(404).json({ message: 'Page Not Found' })
})

router.use(mwErrorHandler)

export default router
