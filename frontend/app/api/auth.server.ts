import axios from 'axios'

interface LoginData {
	email: string
	password: string
}
interface RegisterData {
	name: string
	email: string
	password: string
}

const API_URL = `http://localhost:4000/api/user`

// Register user
const register = async (registerData: RegisterData) => {
	const response = await axios.post(API_URL, registerData)

	const user = await response.data

	return JSON.stringify(user)
}

// Login user
const login = async (loginData: LoginData) => {
	const response = await axios.post(API_URL + '/login', loginData)

	const user = await response.data

	return JSON.stringify(user)
}

const auth = {
	register,
	login
}

export default auth
