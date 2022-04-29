import { LoaderFunction, redirect, useLoaderData } from 'remix'
import { Hero } from '~/components'
import { getUser } from '~/utils/session.server'

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request)

	return { user }
}

export default function Index() {
	const { user } = useLoaderData()

	return (
		<>
			{user ? (
				<>
					<h3>{user.name} سلام</h3>
				</>
			) : (
				<>
					<Hero />
				</>
			)}
		</>
	)
}
