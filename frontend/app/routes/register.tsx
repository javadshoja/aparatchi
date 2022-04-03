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
import styled from '@emotion/styled'

const Container = styled(InputContainer)`
	margin-top: 20px;
	margin-bottom: 20px;
`

const RegisterHeader = styled(Header)`
	p {
		margin: 10px 0 30px;
	}
`

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	const { name, email, password, password2 } = formData

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
					<RegisterHeader>
						<h1>:) خوش اومدی</h1>
						<p>ثبت‌نام و ساخت حساب کاربری</p>
					</RegisterHeader>

					<form method='POST'>
						<Container>
							<Input
								type='name'
								name='name'
								id='name'
								placeholder='نام کاربری'
								value={name}
								onChange={onChange}
							/>
						</Container>
						<Container>
							<Input
								type='email'
								name='email'
								id='email'
								placeholder='ایمیل'
								value={email}
								onChange={onChange}
							/>
						</Container>
						<Container>
							<Input
								type='password'
								name='password'
								id='password'
								placeholder='رمز عبور'
								value={password}
								onChange={onChange}
							/>
						</Container>
						<Container>
							<Input
								type='password2'
								name='password2'
								id='password2'
								placeholder='تکرار رمز عبور'
								value={password2}
								onChange={onChange}
							/>
						</Container>
						<Container>
							<ButtonBlock type='submit'>ثبت نام</ButtonBlock>
						</Container>
					</form>
				</FormArea>
			</Grid>
		</>
	)
}

export default Register
