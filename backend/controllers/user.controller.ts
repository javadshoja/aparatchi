import asyncHandler from 'express-async-handler'
import type { Request, Response } from 'express'
import { genSalt, hash } from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { sign } from 'jsonwebtoken'

const { user } = new PrismaClient()

// Generate JWT
const generateToken = (id: string) => {
	return sign({ id }, String(process.env.JWT_SECRET), {
		expiresIn: '30d',
	})
}

/* 
  @desc     Register user
	@method		POST
  @route    /api/user
  @access   Public
*/
export const registerUser = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, email, password } = req.body

		if (!name || !email || !password) {
			res.status(400)
			throw new Error('Please fill all fields')
		}

		// Check user exist
		const userExist = await user.findUnique({
			where: {
				email,
			},
		})

		if (userExist) {
			res.status(400)
			throw new Error('User already exist')
		}

		// Hash password
		const salt = await genSalt(10)

		const hashedPassword = await hash(password, salt)

		const User = await user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		})

		if (User) {
			res.status(201).json({
				_id: User.id,
				name: User.name,
				email: User.email,
				token: generateToken(User.id),
			})
		} else {
			res.status(400)
			throw new Error('Invalid user data')
		}
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
