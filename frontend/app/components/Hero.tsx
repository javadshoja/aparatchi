import styled from '@emotion/styled'
import { useNavigate } from 'remix'
import { Button } from './styles'

function Hero() {
	const navigate = useNavigate()
	function onClick() {
		navigate('/login')
	}
	return (
		<>
			<Container>
				<Main>
					<h2>!هنوز وارد نشده اید</h2>
					<p>.برای دسترسی به محتوای سایت لطفا وارد شوید</p>
					<Button onClick={onClick}>ورود به سایت</Button>
				</Main>
			</Container>
		</>
	)
}

export default Hero

const Container = styled.section`
	display: grid;
	position: relative;
	align-items: center;
	height: 100vh;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	background-image: url('images/hero-background.jpg');
	background-size: cover;
`
const Main = styled.div`
	grid-column: 5/9;
	grid-row: 1/10;
	display: grid;
	text-align: center;
	gap: 1rem;

	@media (max-width: 60em) {
		grid-column: 4/10;
	}
	@media (max-width: 40em) {
		grid-column: 3/11;
	}
	@media (max-width: 30em) {
		grid-column: 2/12;
	}
`
