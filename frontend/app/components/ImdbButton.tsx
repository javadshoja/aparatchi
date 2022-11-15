import styled from '@emotion/styled'

const ImdbButton = ({ logo, children, imdb }: any) => (
	<Wrapper tabIndex={0} href={`https://imdb.com/title/${imdb}/`}>
		{logo && <Left>{logo}</Left>}
		{children && (
			<Right>
				<Text>{children}</Text>
			</Right>
		)}
	</Wrapper>
)

export default ImdbButton

const Wrapper = styled.a`
	display: inline-flex;
	color: currentColor;
	text-decoration: none;
	border-radius: 0.25rem;
	box-shadow: inset 0 0 0 1px #353f4c;
	overflow: hidden;
	margin: 1rem 0.5rem;
	outline: none;
	&:focus {
		box-shadow: inset 0 0 0 0.125rem #ff9f1c;
	}
`

const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ff9f1c;
	padding: 0.5rem;
`

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`

const Text = styled.p`
	font-weight: 500;
`
