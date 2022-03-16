import { useState } from 'react'
import {
	Grid,
	InputContainer,
	Input,
	Header,
	Img
} from '~/components/styles/Form.styled'
import { FormArea, ImageArea } from '~/components/styles/Login.styled'
import { ButtonBlock } from '~/components/styles'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const { email, password } = formData

	const onChange = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	return (
		<>
			<Grid>
				<FormArea>
					<Header>
						<h1>:) خوش برگشتی</h1>
						<p>ورود به حساب کاربری</p>
					</Header>

					<form method='POST'>
						<InputContainer>
							<Input
								type='email'
								name='email'
								id='email'
								placeholder='ایمیل'
								value={email}
								onChange={onChange}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								type='password'
								name='password'
								id='password'
								placeholder='رمز عبور'
								value={password}
								onChange={onChange}
							/>
						</InputContainer>
						<InputContainer>
							<ButtonBlock type='submit'>ورود</ButtonBlock>
						</InputContainer>
					</form>
				</FormArea>
				<ImageArea>
					<Img src='images/login.svg' alt='login' />
				</ImageArea>
			</Grid>
		</>
	)
}

export default Login
