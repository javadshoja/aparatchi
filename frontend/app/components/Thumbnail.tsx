import styled from '@emotion/styled'
import { useNavigate } from 'remix'
import { Movie } from 'typings'
import { thumbnailUrl } from '~/constants/movie'

interface Props {
	movie: Movie
}

function Thumbnail({ movie }: Props) {
	const navigate = useNavigate()

	const handleClick = (id: number) => {
		navigate(`movies/${id}`)
	}

	return (
		<Container onClick={() => handleClick(movie.id)}>
			<Image
				src={`${thumbnailUrl}${movie.backdrop_path || movie.poster_path}`}
			/>
		</Container>
	)
}

export default Thumbnail

const Container = styled.div`
	position: relative;
	height: 12rem;
	min-width: 300px;
	cursor: pointer;
	margin-right: 1rem;
	transition: all 200ms ease-out;
	@media (max-width: 60em) {
		height: 9rem;
		min-width: 260px;
	}
	@media (max-width: 40em) {
		height: 8rem;
		min-width: 220px;
	}
	@media (max-width: 30em) {
		min-width: 180px;
		height: 7rem;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	object-fit: cover;
`
