import Movie from './Icons/MovieIcon'
import AspectRatio from './AspectRatio'
import styled from '@emotion/styled'

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Wrapper = styled(AspectRatio)`
	overflow: hidden;
	object-fit: cover;
	height: 620px;
	border-radius: 0.25rem;
	background-color: #1b2329;
	margin-top: 1rem;
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Img = styled.img`
	display: block;
	min-height: 100%;
	object-fit: cover;
	transition: 0.2s filter;
	${p => p.loading && `filter: blur(0.5px)`}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: #353f4c;
`

const MovieImage = ({ alt, image }: any) => (
	<Wrapper ratio={image ? 0.75 : 1}>
		{image ? (
			<Img
				loading='lazy'
				placeholder={`https://image.tmdb.org/t/p/w300/${image}`}
				src={`https://image.tmdb.org/t/p/w1280/${image}`}
				alt={alt}
			/>
		) : (
			<NoImage>
				<Movie size={96} strokeWidth={1.125} />
			</NoImage>
		)}
	</Wrapper>
)

export default MovieImage
