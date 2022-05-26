import { Carousel } from 'react-responsive-carousel'
import styled from '@emotion/styled'
import { Movie } from 'typings'
import { movieBaseUrl } from '~/constants/movie'
import { Button } from './styles'
import { Link, useNavigate } from 'remix'

interface props {
	bannerMovies: Movie[]
}

function SliderBanner({ bannerMovies }: props) {
	const navigate = useNavigate()

	function onClick(imdbId: string) {
		navigate(`movies/${imdbId}`)
	}
	return (
		<Container>
			<Carousel
				autoPlay
				infiniteLoop
				interval={5000}
				showArrows={false}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
			>
				{bannerMovies.map(movie => (
					<div key={movie.id}>
						<ImageContainer>
							<Image
								src={`${movieBaseUrl}${
									movie?.backdrop_path || movie?.poster_path
								}`}
								loading='lazy'
								alt={movie?.title}
							/>
						</ImageContainer>
						<DetailsContainer>
							<Title>
								{movie?.title || movie?.original_name || movie?.name}
							</Title>
							<Overview>{movie?.overview}</Overview>
							<MovieLink to={`movies/${movie?.imdb_id}`}>
								IMDb: {movie?.vote_average}/10
							</MovieLink>
							<Button onClick={() => onClick(movie?.imdb_id)}>
								اطلاعات بیشتر
							</Button>
						</DetailsContainer>
					</div>
				))}
			</Carousel>
		</Container>
	)
}

export default SliderBanner

const Container = styled.section`
	position: relative;
	width: 100vw;
	margin: 0 auto;
`

const ImageContainer = styled.div`
	height: 100vh;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const DetailsContainer = styled.div`
	position: absolute;
	top: 12rem;
	left: 4rem;
	text-align: left;
	@media (max-width: 60em) {
		left: 3rem;
	}
	@media (max-width: 50em) {
		left: 2rem;
	}
	@media (max-width: 30em) {
		left: 1rem;
	}
	/* transform: translate(-50%, -50%); */
`
const Title = styled.h1`
	font-weight: bold;
	font-size: 4.5rem;
	@media (max-width: 60em) {
		font-size: 3.5rem;
	}
	@media (max-width: 50em) {
		font-size: 2.5rem;
	}
	@media (max-width: 30em) {
		font-size: 2rem;
	}
`
const Overview = styled.p`
	max-width: 42rem;
	font-size: 1.5rem;
	margin-bottom: 1.5rem;

	@media (max-width: 60em) {
		font-size: 1.3rem;
	}
	@media (max-width: 50em) {
		max-width: 32rem;
		font-size: 1.1rem;
	}
	@media (max-width: 30em) {
		max-width: 22rem;
		font-size: 1rem;
	}
	@media (max-width: 20em) {
		max-width: 16rem;
	}
`

const MovieLink = styled(Link)`
	padding: 10px 20px;
	margin-right: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	border-radius: 5px;
	color: #000;
	background-color: #ffc107;
	/* border: 1px solid #fff; */
`
