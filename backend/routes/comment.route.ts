import { Router } from 'express'
import { createComment, getMovieComments } from '~/controllers'
import { getAllComments } from '~/controllers/comment.controller'
import { protect } from '~/middleware'

const router = Router()

router.route('/').post(protect, createComment).get(getAllComments)
router.route('/:movie_id').get(protect, getMovieComments)

export default router
