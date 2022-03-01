import { Router } from 'express'
import { registerUser, loginUser, getMe } from '~/controllers'
import { protect } from '~/middleware'

const router = Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

export default router
