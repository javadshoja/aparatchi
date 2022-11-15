import styled from '@emotion/styled'
import { Movie } from 'typings'
import { Link } from 'remix'

function DownloadList(movie: Movie) {
	return (
		<Container>
			<h3 dir='rtl'>لینک های دانلود</h3>
			<Ol>
				<Link to={movie.title}>
					<Li>{movie.title} 1080px x254</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 1080px x256</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 1080px x256 10bit</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 720px x254</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 720px x256</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 720px x256 10bit</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 480px x254</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 480px x256</Li>
				</Link>
				<Link to={movie.title}>
					<Li>{movie.title} 480px x256 10bit</Li>
				</Link>
			</Ol>
		</Container>
	)
}

export default DownloadList

const Container = styled.section`
	margin: 4rem auto;
	max-width: 60rem;
	padding: 1rem;
`
const Ol = styled.ol`
	counter-reset: gradient-counter;
	list-style: none;
	margin: 1.75rem 0;
	padding-left: 1rem;
	a {
		color: #fff;
	}
`
const Li = styled.li`
	text-align: center;
	background: #1e1e2f;
	font-weight: 400;
	font-size: 1.2rem;
	border-radius: 0 0.5rem 0.5rem 0.5rem;
	counter-increment: gradient-counter;
	margin-top: 1.4rem;
	min-height: 3rem;
	padding: 1rem 1rem 1rem 3rem;
	position: relative;

	::before,
	::after {
		background: linear-gradient(135deg, #eb1145 0%, #ff9f1c 100%);
		border-radius: 1rem 1rem 0 1rem;
		content: '';
		height: 3rem;
		right: 1rem;
		overflow: hidden;
		position: absolute;
		top: -1rem;
		width: 3rem;
	}
	::before {
		align-items: center;
		content: counter(gradient-counter);
		color: #fff;
		display: flex;
		font: 900 1.5em/1 'Vazirmatn';
		justify-content: center;
		padding: 0.125em 0.25em;
		z-index: 1;
	}
`
