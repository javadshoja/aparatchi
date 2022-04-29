import { json } from 'remix'

export const badRequest = (data: object) => {
	return json(data, { status: 400 })
}
