import { redirect } from 'remix'
import { logout } from '~/utils/session.server'
import type { ActionFunction, LoaderFunction } from 'remix'

export const action: ActionFunction = ({ request }) => {
	return logout(request)
}

export const loader: LoaderFunction = async () => {
	return redirect('/')
}
