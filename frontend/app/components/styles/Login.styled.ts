import styled from '@emotion/styled'

export const FormArea = styled.div`
	grid-column: 2/6;

	@media (max-width: 60em) {
		grid-column: 2/8;
	}
	@media (max-width: 50em) {
		grid-column: 3/11;
	}
	@media (max-width: 30em) {
		grid-column: 1/13;
	}
`
export const ImageArea = styled.div`
	grid-column: 8/13;

	@media (max-width: 60em) {
		grid-column: 8/13;
	}
	@media (max-width: 50em) {
		display: none;
	}
	@media (max-width: 30em) {
		display: none;
	}
`
