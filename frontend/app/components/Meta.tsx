import styled from '@emotion/styled'

const getRating = (release_dates: any) =>
	release_dates?.results?.find((x: any) => x.iso_3166_1 === 'US')
		?.release_dates[0]?.certification || null

const getFirst = ({ release_date, first_air_date, birthday }: any) => {
	return (first_air_date || birthday || release_date)?.split('-')[0]
}

const getSecond = ({ runtime, last_air_date, in_production }: any) => {
	if (runtime) return `${runtime} min`
	if (in_production) return 'Present'
	if (last_air_date) return last_air_date.split('-')[0]
	return null
}

const getHighlight = ({ release_dates, number_of_seasons }: any) => {
	if (release_dates) return getRating(release_dates)
	if (number_of_seasons)
		return `${number_of_seasons} season${number_of_seasons > 1 ? 's' : ''}`
	return null
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const SeparatedText = styled.p`
	color: #7a8c99;
	span + span {
		&:before {
			content: ' • ';
		}
	}
`

const Rating = styled.p`
	background: #7a8c99;
	color: #0a1014;
	font-weight: 500;
	border-radius: 0.25rem;
	margin: 0 0.5rem;
	padding: 0.125rem 0.375rem;
	text-align: center;
`

const Meta = (data: any) => (
	<Wrapper style={{ margin: '1.5rem 0' }}>
		<SeparatedText>
			{getFirst(data) && <span>{getFirst(data)}</span>}
			{getSecond(data) && getSecond(data) !== getFirst(data) && (
				<span>{getSecond(data)}</span>
			)}
			{(getFirst(data) || getSecond(data)) && getHighlight(data) && <span />}
		</SeparatedText>
		{getHighlight(data) && <Rating>{getHighlight(data)}</Rating>}
	</Wrapper>
)

export default Meta
