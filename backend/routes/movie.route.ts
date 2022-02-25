import { Router } from 'express'
import {
	getMovies,
	getMoviesById,
	createMovie,
	updateMovie,
	deleteMovie,
} from '~/controllers'

const router = Router()

router.route('/').get(getMovies).post(createMovie)

router.route('/:movieId').put().delete()
router
	.route('/:movieId')
	.put(updateMovie)
	.delete(deleteMovie)
	.get(getMoviesById)

export default router
