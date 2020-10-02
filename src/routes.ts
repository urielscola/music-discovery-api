import { Router } from 'express'
import mwLogger from './middlewares/mwLogger'
import mwErrorHandler from './middlewares/mwErrorHandler'

const router = Router()

router.use(mwLogger)

router.get('/', (req, res) => {
  res.json({ message: 'First commit' })
})

router.use(mwErrorHandler)

export default router
