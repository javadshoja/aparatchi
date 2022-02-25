import type { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { PrismaClient } from '@prisma/client'

const { movie } = new PrismaClient()

/* 
  @desc     Get movies
	@method		GET
  @route    /api/movie
  @access   Private
*/
export const getMovies = asyncHandler(async (req: Request, res: Response) => {
	const movies = await movie.findMany()
	res.json(movies)
})

/* 
  @desc     Get movie by imdbId
	@method		GET
  @route    /api/movie/:movieId
  @access   Private
*/
export const getMoviesById = asyncHandler(
	async (req: Request, res: Response) => {
		const { movieId } = req.params
		const Movie = await movie.findUnique({
			where: {
				imdbId: movieId,
			},
		})
		res.json(Movie)
	},
)

/* 
  @desc     Create movie
	@method		POST
  @route    /api/movie
  @access   Private
*/
export const createMovie = asyncHandler(async (req: Request, res: Response) => {
	const { title, summary, imdbId, year, time, rating } = req.body

	if (!title || !summary || !imdbId || !year || !time || !rating) {
		res.status(400)
		throw new Error('Please fill all field')
	}
	const newMovie = await movie.create({
		data: {
			title,
			summary,
			imdbId,
			year: parseInt(year),
			time: parseInt(time),
			rating: parseFloat(rating),
		},
	})

	res.json(newMovie)
})

/* 
  @desc     Update movie
	@method		PUT
  @route    /api/movie/:movieId
  @access   Private
*/
export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
	const { movieId } = req.params

	const { title, summary, imdbId, year, time, rating } = req.body

	const Movie = await movie.findUnique({
		where: {
			id: movieId,
		},
	})

	if (!Movie) {
		res.status(400)
		throw new Error('Movie not found')
	}

	const updatedMovie = await movie.update({
		where: {
			id: movieId,
		},
		data: {
			title: title ? title : Movie.title,
			summary: summary ? summary : Movie.summary,
			imdbId: imdbId ? imdbId : Movie.imdbId,
			year: year ? parseInt(year) : Movie.year,
			time: time ? parseInt(time) : Movie.time,
			rating: rating ? parseFloat(rating) : Movie.rating,
		},
	})

	res.json(updatedMovie)
})

/* 
  @desc     Delete movie
	@method		DELETE
  @route    /api/movie/:movieId
  @access   Private
*/
export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
	const { movieId } = req.params

	const Movie = await movie.findUnique({
		where: {
			id: movieId,
		},
	})

	if (!Movie) {
		res.status(400)
		throw new Error('Movie not found')
	}

	await movie.delete({
		where: {
			id: movieId,
		},
	})

	res.json({ id: movieId })
})
