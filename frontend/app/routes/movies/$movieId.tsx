import { useLoaderData } from '@remix-run/react'
import styled from '@emotion/styled'
import { LoaderFunction, redirect } from 'remix'
import { getMovie } from '~/api/movies.server'
import { Movie } from 'typings'
import Arrow from '~/components/Icons/Arrow'
import Meta from '~/components/Meta'
import ImdbButton from '~/components/ImdbButton'
import IMDB from '~/components/Icons/IMDB'
import { Grid } from '~/components/styles/Form.styled'
import { FormArea, ImageArea } from '~/components/styles/Login.styled'
import MovieImage from '~/components/MovieImage'
import { getComments } from '~/api/comments.server'
import { getUser } from '~/utils/session.server'
import CommentList from '~/components/CommentList'
import { useEffect, useState } from 'react'
import AddComment from '~/components/AddComment'
import { Comment } from 'typings'
import axios from 'axios'
import { API_URL } from '~/constants/local'

export const loader: LoaderFunction = async ({ params, request }) => {
	const movieId = params.movieId as string
	const user = await getUser(request)

	if (!user) {
		return redirect('/')
	}

	const token = user.token

	const comments = await getComments(token, movieId)

	const movie = await getMovie(movieId)

	if (user) {
		return {
			movie,
			comments,
			token,
			movieId,
			user
		}
	}
	return {}
}

function MovieIndex() {
	const [comments, setComments] = useState<Comment[]>([])

	const loaderData = useLoaderData()

	const movie: Movie = loaderData.movie

	useEffect(() => {
		setComments(loaderData.comments)
	}, [])

	const title = movie?.title || movie?.name
	const image = movie?.poster_path || movie?.profile_path
	const imdb = movie?.imdb_id || movie?.imdb_id
	const score = movie?.vote_average

	const addComment = async (body: any) => {
		const newComment = {
			body,
			author: loaderData.user.name,
			movie: title,
			movie_id: loaderData.movieId
		}

		const config = {
			headers: {
				Authorization: `Bearer ${loaderData.token}`
			}
		}

		const response = await axios.post(`${API_URL}/comment`, newComment, config)

		const comment = await response.data

		setComments([...comments, comment])
	}

	return (
		<>
			<Container>
				<Wrapper>
					<Grid>
						<InfoArea>
							<BackLink onClick={() => window.history.back()}>
								<Arrow />
							</BackLink>
							<Meta {...movie} />
							<Title>{movie.title}</Title>
							<div style={{ display: 'flex', margin: '1rem -0.5rem' }}>
								{imdb && (
									<ImdbButton imdb={imdb} logo={<IMDB color='#0A1014' />}>
										{score && `${score}/10`}
									</ImdbButton>
								)}
							</div>
							<Overview>
								<p>خلاصه</p>
								<strong>{movie.overview}</strong>
							</Overview>
						</InfoArea>
						<ImageArea>
							<MovieImage alt={`poster for: ${title}`} image={image} />
						</ImageArea>
					</Grid>
					<DownloadList {...movie} />
					<AddComment addComment={addComment} />
					<CommentList comments={comments} />
				</Wrapper>
			</Container>
		</>
	)
}

export default MovieIndex

const Container = styled.div`
	margin-top: 70px;
	position: relative;
	display: flex;
	flex-direction: column;
`

const Wrapper = styled.div`
	max-width: 1180px;
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;
`

const BackLink = styled.button`
	background: #0a1014;
	border: none;
	display: inline-block;
	appearance: none;
	color: #7a8c99;
	cursor: pointer;
	border-radius: 0.25rem;
	margin: 0 -0.5rem;
	padding: 0.75rem 1rem 0.75rem 0.5rem;
	position: sticky;
	top: 0.25rem;
	z-index: 2;
	&:hover {
		color: #fff;
	}
	&:focus {
		box-shadow: inset 0 0 0 0.125rem #eb1145;
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 0 4rem #0a1014;
	}
`
const Title = styled.h2`
	font-size: 5rem;
	line-height: 5.5rem;
	font-weight: 600;
	color: #fff;
`
const InfoArea = styled(FormArea)`
	grid-column: 1/7;
`

const Overview = styled.div`
	margin-bottom: 1rem;

	p {
		color: #7a8c99;
		font-weight: 400;
	}
`
