import asyncHandler from 'express-async-handler'
import { PrismaClient } from '@prisma/client'
import { Response } from 'express'
import { IuserRequest } from '~/middleware'

const { user, comment } = new PrismaClient()

/* 
  @desc     Get All comments
  @route    GET /api/comment
  @access   Private
*/
export const getAllComments = asyncHandler(async (_, res: Response) => {
	const comments = await comment.findMany({
		select: {
			id: true,
			body: true,
			created_at: true,
			author: true,
			movie: true
		}
	})

	res.json(comments)
})

/* 
  @desc     Get Movie comments
  @route    GET /api/comment/:movie_id
  @access   Public
*/
export const getMovieComments = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const comments = await comment.findMany({
			where: {
				movie_id: parseInt(req.params.movie_id)
			},
			select: {
				id: true,
				body: true,
				created_at: true,
				author: true
			}
		})

		res.json(comments)
	}
)

/* 
  @desc     Create comment
	@method		POST
  @route    /api/comment
  @access   Private
*/
export const createComment = asyncHandler(
	async (req: IuserRequest, res: Response) => {
		const { body, author, movie, movie_id } = req.body

		const userId = req.user.id

		if (!body || !author || !movie || !movie_id) {
			res.status(400)
			throw new Error('Please fill all field')
		}

		const userExist = user.findUnique({
			where: {
				id: userId
			}
		})

		if (!userExist) {
			res.status(400)
			throw new Error('User not found')
		}

		const newComment = await comment.create({
			data: {
				body,
				author,
				movie,
				movie_id: parseInt(movie_id),
				user_id: userId
			}
		})

		res.json(newComment)
	}
)
