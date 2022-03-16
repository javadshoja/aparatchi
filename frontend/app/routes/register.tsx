import { useState } from 'react'
import {
	Grid,
	InputContainer,
	Input,
	Header,
	Img
} from '~/components/styles/Form.styled'
import { FormArea, ImageArea } from '~/components/styles/Register.styled'
import { ButtonBlock } from '~/components/styles'

function Register() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: ''
	})

	const { email, password, password2 } = formData

	const onChange = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	return (
		<>
			<Grid>
				<ImageArea>
					<Img src='images/register.svg' alt='register' />
				</ImageArea>
				<FormArea>
					<Header>
						<h1>:) خوش اومدی</h1>
						<p>ثبت‌نام و ساخت حساب کاربری</p>
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
							<Input
								type='password2'
								name='password2'
								id='password2'
								placeholder='تکرار رمز عبور'
								value={password2}
								onChange={onChange}
							/>
						</InputContainer>
						<InputContainer>
							<ButtonBlock type='submit'>ثبت نام</ButtonBlock>
						</InputContainer>
					</form>
				</FormArea>
			</Grid>
		</>
	)
}

export default Register
