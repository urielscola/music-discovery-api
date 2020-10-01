import { Router } from 'express'
import mwLogger from './middlewares/mwLogger'

const router = Router()

router.use(mwLogger)

router.get('/', (req, res) => {
  req.logger.info('Opa')

  res.json({ message: 'First commit' })
})

export default router
