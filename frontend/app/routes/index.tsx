import { useLoaderData } from 'remix'
import type { LinksFunction, LoaderFunction } from 'remix'
import { getBannerMovies } from '~/api/movies.server'
import { Hero } from '~/components'
import SliderStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { SliderBanner } from '~/components'
import { getUser } from '~/utils/session.server'

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: SliderStyle }
]

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request)

	const bannerMovies = await getBannerMovies()

	if (user) return { user, bannerMovies }

	return {}
}

export default function Index() {
	const { user, bannerMovies } = useLoaderData()

	return (
		<>
			{user ? (
				<>
					<SliderBanner bannerMovies={bannerMovies} />
				</>
			) : (
				<>
					<Hero />
				</>
			)}
		</>
	)
}
