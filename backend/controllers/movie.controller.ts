import type { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
// import { PrismaClient } from '@prisma/client'

// const { movie } = new PrismaClient()

/* 
  @desc     Get movies
	@method		GET
  @route    /api/movie
  @access   Private
*/
export const getMovies = asyncHandler(async (req: Request, res: Response) => {
	res.json({ message: 'Get movies' })
})

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

	res.json({ message: `Create movie: ${title}` })
})

/* 
  @desc     Update movie
	@method		PUT
  @route    /api/movie/:movieId
  @access   Private
*/
export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
	const { movieId } = req.params
	res.json({ message: `Update ${movieId}` })
})

/* 
  @desc     Delete movie
	@method		DELETE
  @route    /api/movie/:movieId
  @access   Private
*/
export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
	const { movieId } = req.params
	res.json({ message: `Delete ${movieId}` })
})
