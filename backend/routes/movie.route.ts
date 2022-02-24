import { Router } from 'express'
import {
	getMovies,
	createMovie,
	updateMovie,
	deleteMovie,
} from '~/controllers'

const router = Router()

router.route('/').get(getMovies).post(createMovie)

router.route('/:movieId').put().delete()
router.route('/:movieId').put(updateMovie).delete(deleteMovie)

export default router
