import asyncHandler from 'express-async-handler'
import type { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

export interface IuserRequest extends Request {
	user?: any
}

interface JwtPayload {
	id: string
}

const { user } = new PrismaClient()

const protect = asyncHandler(
	async (req: IuserRequest, res: Response, next: NextFunction) => {
		let token

		const { authorization } = req.headers

		if (authorization && authorization.startsWith('Bearer')) {
			try {
				// Get token from headers
				token = authorization.split(' ')[1]

				// Verify token
				const decoded = verify(
					token,
					String(process.env.JWT_SECRET),
				) as JwtPayload

				req.user = await user.findUnique({
					where: {
						id: decoded.id,
					},
					select: {
						id: true,
						name: true,
						email: true,
					},
				})
				next()
			} catch (error) {
				console.log(error)
				res.status(401)
				throw new Error('Not authorize')
			}
		}

		if (!token) {
			res.status(401)
			throw new Error('Not authorize, no token')
		}
	},
)

export default protect
