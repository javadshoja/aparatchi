import axios from 'axios'
import { API_URL } from '~/constants/local'

export const getComments = async (token: string, movie_id: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.get(`${API_URL}/comment/${movie_id}`, config)

	return response.data
}
