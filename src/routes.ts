import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'First commit' })
})

export default router
