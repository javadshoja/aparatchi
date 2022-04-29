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
import { redirect, useActionData } from 'remix'
import type { ActionFunction, LoaderFunction } from 'remix'
import { badRequest } from '~/utils/badRequest'
import { createUserSession, getUser } from '~/utils/session.server'
import auth from '~/api/auth.server'

const Container = styled(InputContainer)`
	margin-top: 20px;
	margin-bottom: 20px;
`

const RegisterHeader = styled(Header)`
	p {
		margin: 10px 0 30px;
	}
`

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData()

	const name = form.get('name') as string
	const email = form.get('email') as string
	const password = form.get('password') as string
	const password2 = form.get('password2') as string

	if (password !== password2) {
		return badRequest({ error: 'رمز عبور یکسان نیست' })
	}

	const fields = {
		name,
		email,
		password
	}

	const user = await auth.register(fields)

	return createUserSession(user, '/')
}

export const loader: LoaderFunction = async ({ request }) => {
	const token = await getUser(request)

	if (token) {
		return redirect('/')
	}
	return null
}

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

	const actionData = useActionData()

	return (
		<>
			<Grid>
				<ImageArea>
					<Img src='images/register.svg' alt='register' />
				</ImageArea>
				<FormArea>
					<RegisterHeader>
						{actionData?.error && <p>{actionData?.error}</p>}
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
								type='password'
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
