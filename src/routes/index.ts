import { Router } from 'express'
import { mwLogger, mwErrorHandler, mwAuthentication } from '../middlewares'
import loginRoutes from './login-routes'
import userRoutes from './user-routes'

const router = Router()

router.use(mwLogger)
router.use('/login', loginRoutes)
router.use('/me', mwAuthentication, userRoutes)
router.use((req, res) => res.status(404).json({ message: 'Page Not Found' }))
router.use(mwErrorHandler)

export default router
