import styled from '@emotion/styled'

export const FormArea = styled.div`
	grid-column: 7/11;

	@media (max-width: 60em) {
		grid-column: 7/11;
	}
	@media (max-width: 50em) {
		grid-column: 3/11;
	}
	@media (max-width: 30em) {
		grid-column: 1/13;
	}
`
export const ImageArea = styled.div`
	grid-column: 2/7;

	@media (max-width: 60em) {
		grid-column: 2/7;
	}
	@media (max-width: 50em) {
		display: none;
	}
`
