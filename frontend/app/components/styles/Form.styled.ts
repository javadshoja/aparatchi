import styled from '@emotion/styled'

export const Grid = styled.div`
	display: grid;
	height: 85vh;
	align-items: center;
	grid-template-columns: repeat(12, 1fr);

	@media (max-width: 50em) {
		height: 65vh;
	}
`

export const Header = styled.div`
	text-align: center;

	p {
		margin: 10px 0 60px;
		color: #808080;
	}
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px;
`

export const Input = styled.input`
	width: 100%;
	padding: 15px;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	margin-bottom: 10px;
	font-size: 1.1rem;

	::placeholder {
		text-align: right;
		font-weight: 600;
		font-family: 'Vazirmatn';
		font-size: 1.1rem;
		color: #808080;
	}
`

export const Img = styled.img`
	width: 70%;
`
