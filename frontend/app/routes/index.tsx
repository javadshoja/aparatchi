import { useLoaderData } from 'remix'
import type { LinksFunction, LoaderFunction } from 'remix'
import { getBannerMovies, getRowsMovies } from '~/api/movies.server'
import { Hero, Row } from '~/components'
import SliderStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { SliderBanner } from '~/components'
import { getUser } from '~/utils/session.server'

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: SliderStyle }
]

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request)

	const bannerMovies = await getBannerMovies()
	const [
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries
	] = await getRowsMovies()
	if (user)
		return {
			user,
			bannerMovies,
			trendingNow,
			topRated,
			actionMovies,
			comedyMovies,
			horrorMovies,
			romanceMovies,
			documentaries
		}

	return {}
}

export default function Index() {
	const {
		user,
		bannerMovies,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries
	} = useLoaderData()

	return (
		<>
			{user ? (
				<>
					<SliderBanner bannerMovies={bannerMovies} />
					<section>
						<Row title='بیشترین بازدید' movies={trendingNow}></Row>
						<Row title='بالاترین امتیاز' movies={topRated}></Row>
						<Row title='فیلم های اکشن' movies={actionMovies}></Row>
						<Row title='فیلم های کمدی' movies={comedyMovies}></Row>
						<Row title='فیلم های ترسناک' movies={horrorMovies}></Row>
						<Row title='فیلم های عاشقانه' movies={romanceMovies}></Row>
						<Row title='فیلم مستند' movies={documentaries}></Row>
					</section>
				</>
			) : (
				<>
					<Hero />
				</>
			)}
		</>
	)
}
