import { createCookieSessionStorage, redirect } from 'remix'

// Get session secret
const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
	throw new Error('No session Secret')
}

// Create session storage
const storage = createCookieSessionStorage({
	cookie: {
		name: 'aparatchi_session',

		secure: process.env.NODE_ENV === 'production',
		secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 14,
		httpOnly: true
	}
})

// Create session
export const createUserSession = async (user: string, redirectTo: string) => {
	const session = await storage.getSession()

	session.set('userSession', user)

	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await storage.commitSession(session)
		}
	})
}

// Get user session
export function getUserSession(request: Request) {
	return storage.getSession(request.headers.get('Cookie'))
}

// Get logged in user
export async function getUser(request: Request) {
	const session = await getUserSession(request)
	const user = session.get('userSession')

	if (!user || typeof user !== 'string') {
		return null
	}

	return JSON.parse(user)
}

// user logout and destroy session
export async function logout(request: Request) {
	const session = await storage.getSession(request.headers.get('Cookie'))

	return redirect('/auth/logout', {
		headers: {
			'Set-cookie': await storage.destroySession(session)
		}
	})
}
