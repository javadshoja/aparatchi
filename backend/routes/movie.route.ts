import { Router } from 'express'
import {
	getMovies,
	getMovieById,
	createMovie,
	updateMovie,
	deleteMovie,
} from '~/controllers'
import { protect } from '~/middleware'

const router = Router()

router.route('/').get(protect, getMovies).post(createMovie)

router
	.route('/:movieId')
	.put(updateMovie)
	.delete(deleteMovie)
	.get(protect, getMovieById)

export default router
