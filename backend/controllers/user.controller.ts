import asyncHandler from 'express-async-handler'
import type { Request, Response } from 'express'

/* 
  @desc     Register user
	@method		POST
  @route    /api/user
  @access   Public
*/
export const registerUser = asyncHandler(
	async (req: Request, res: Response) => {
		res.json({ message: 'Register user' })
	},
)

/* 
  @desc     Login user
	@method		POST
  @route    /api/user/login
  @access   Public
*/
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
	res.json({ message: 'Login user' })
})

/* 
  @desc     Get user
	@method		GET
  @route    /api/user/me
  @access   Private
*/
export const getMe = asyncHandler(async (req: Request, res: Response) => {
	res.json({ message: 'User information' })
})
