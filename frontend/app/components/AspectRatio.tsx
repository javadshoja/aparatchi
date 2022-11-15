import styled from '@emotion/styled'

const Outer = styled.div`
	height: 0;
	overflow: hidden;
	position: relative;
`

const Inner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`

const AspectRatio = ({ ratio = 1, children, ...props }: any) => (
	<Outer ratio={ratio} {...props}>
		<Inner>{children}</Inner>
	</Outer>
)

export default AspectRatio
