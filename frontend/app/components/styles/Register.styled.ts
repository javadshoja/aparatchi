import styled from '@emotion/styled'

export const FormArea = styled.div`
	grid-column: 8/12;

	@media (max-width: 60em) {
		grid-column: 8/12;
	}
	@media (max-width: 50em) {
		grid-column: 3/11;
	}
	@media (max-width: 30em) {
		grid-column: 1/13;
	}
`
export const ImageArea = styled.div`
	grid-column: 3/8;

	@media (max-width: 60em) {
		grid-column: 3/8;
	}
	@media (max-width: 50em) {
		display: none;
	}
`
