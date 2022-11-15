import styled from '@emotion/styled'
import { Comment } from 'typings'

interface Props {
	comments: Comment[]
}

function Comments({ comments }: Props) {
	return (
		<Container dir='rtl'>
			<h2>تعداد کامنت ها {comments.length}</h2>
			{comments.reverse().map((comment: any) => (
				<Wrapper key={comment.id}>
					<Time>
						توسط {comment.author} در{' '}
						{new Date(comment.created_at).toLocaleString()}
					</Time>
					<p>{comment.body}</p>
				</Wrapper>
			))}
		</Container>
	)
}

export default Comments

const Container = styled.div`
	margin: 1rem auto;
	max-width: 60rem;
	padding: 1rem;

	h2 {
		font-size: 1.3rem;
	}
`

const Wrapper = styled.div`
	padding: 1rem 0.5rem;
	background-color: #1e1e2f;
	margin: 0.8rem auto;
	border-radius: 10px;
`
const Time = styled.div`
	margin-bottom: 1rem;
	font-size: 0.8rem;
	color: #cccccc;
`
