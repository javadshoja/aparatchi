import styled from '@emotion/styled'
import { Movie } from 'typings'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { css } from '@emotion/react'
import Thumbnail from './Thumbnail'
import { useRef, useState } from 'react'

interface Props {
	title: string
	movies: Movie[]
}

function Row({ title, movies }: Props) {
	const rowRef = useRef<HTMLDivElement>(null)
	const [isMoved, setIsMoved] = useState(false)

	function handleClick(dir: 'left' | 'right') {
		setIsMoved(true)

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current

			const scrollTo =
				dir === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

			rowRef.current.scrollTo({
				left: scrollTo,
				behavior: 'smooth'
			})
		}
	}

	return (
		<Container>
			<Title dir='rtl'>{title}</Title>

			<Slider>
				<LeftIcon
					id='icon'
					onClick={() => handleClick('left')}
					className={!isMoved ? 'hidden' : ''}
				/>

				<ThumbnailContainer ref={rowRef}>
					{movies.map(movie => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</ThumbnailContainer>

				<RightIcon id='icon' onClick={() => handleClick('right')} />
			</Slider>
		</Container>
	)
}

export default Row

const Container = styled.div`
	height: 13rem;
	margin-bottom: 4rem;
	margin-right: 3.6rem;
	margin-left: 3.6rem;

	@media (max-width: 60em) {
		height: 11rem;
		margin-right: 2.4rem;
		margin-left: 2.4rem;
	}
	@media (max-width: 40em) {
		height: 10rem;
		margin-right: 1.5rem;
		margin-left: 1.5rem;
	}
	@media (max-width: 30em) {
		height: 9rem;
		margin-right: 1rem;
		margin-left: 1rem;
	}
	:hover {
		#icon {
			opacity: 100;
		}
	}
`

const Title = styled.h2`
	color: #e5e5e5;
	cursor: pointer;
	margin-top: 1rem;
	margin-bottom: 0.5rem;

	transition: color 200ms;
	:hover {
		color: #fff;
	}
`

const Slider = styled.div`
	position: relative;
	margin-left: 1rem;
`

const IconStyle = css`
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: 40;
	margin: auto;
	height: 2rem;
	width: 2rem;
	opacity: 0;
	cursor: pointer;
	transition: opacity 150ms;
`

const LeftIcon = styled(AiOutlineLeft)`
	${IconStyle}
	left: 0.5rem;
`

const RightIcon = styled(AiOutlineRight)`
	${IconStyle}
	right: 0.5rem;
`

const ThumbnailContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	overflow-x: scroll;
	overflow-y: hidden;

	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`
