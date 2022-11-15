import styled from '@emotion/styled'
import { useState } from 'react'

function AddComment({ addComment }: any) {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const handleTextChange = ({ target: { value } }: any) => {
		if (value === '') {
			setBtnDisabled(true)
			setMessage('')
		} else if (value.trim().length < 10) {
			// 👈 check for less than 10
			setMessage('متن باید بیشتر از 10 کاراکتر باشد!')
			setBtnDisabled(true)
		} else {
			setMessage('')
			setBtnDisabled(false)
		}
		setText(value)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			addComment(text)

			// NOTE: reset to default state after submission
			setBtnDisabled(true) // 👈  add this line to reset disabled
			setText('')
		}
	}

	return (
		<Container dir='rtl'>
			<form onSubmit={handleSubmit}>
				<h2>افزودن کامنت</h2>
				<p>نظرتان را در مورد فیلم به ما بگویید.</p>
				<InputGroup>
					<input
						onChange={handleTextChange}
						placeholder='یک نظر بنویسید'
						type='text'
						value={text}
					/>
					<Button type='submit' disabled={btnDisabled}>
						ثبت
					</Button>
				</InputGroup>

				{message && <div className='message'>{message}</div>}
			</form>
		</Container>
	)
}

export default AddComment

const Container = styled.div`
	margin: 1rem auto;
	max-width: 60rem;
	padding: 1rem;

	h2 {
		padding-top: 1rem;
	}

	p {
		padding: 1rem 0;
	}
`

const InputGroup = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid #ccc;
	padding: 8px 10px;
	border-radius: 8px;

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
		background-color: #010511;
		color: #fff;
	}

	input:focus {
		outline: none;
	}
`

const Button = styled.button`
	border: 0;
	border-radius: 8px;
	color: #fff;
	width: 100px;
	height: 40px;
	cursor: pointer;
	background-color: #eb1145;

	:hover {
		transform: scale(0.98);
		opacity: 0.9;
	}

	:disabled {
		background-color: #cccccc;
		color: #333;
		cursor: auto;
	}

	:disabled:hover {
		transform: scale(1);
		opacity: 1;
	}
`
