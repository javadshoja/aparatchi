import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	redirect,
	Scripts,
	ScrollRestoration,
	useCatch,
	useLoaderData
} from 'remix'
import { useContext, useEffect } from 'react'
import { withEmotionCache } from '@emotion/react'
import ServerStyleContext from './styles/server.context'
import ClientStyleContext from './styles/client.context'
import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix'
import globalStyleUrl from '~/styles/global.css'
import styled from '@emotion/styled'
import { Layout } from '~/components'
import { getUser } from './utils/session.server'

export const meta: MetaFunction = () => {
	return { title: 'Aparatchi' }
}

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: globalStyleUrl }
]

interface DocumentProps {
	children: React.ReactNode
	title?: string
}

const Document = withEmotionCache(
	({ children, title }: DocumentProps, emotionCache) => {
		const serverStyleData = useContext(ServerStyleContext)
		const clientStyleData = useContext(ClientStyleContext)

		// Only executed on client
		useEffect(() => {
			// re-link sheet container
			emotionCache.sheet.container = document.head

			// re-inject tags
			const tags = emotionCache.sheet.tags
			emotionCache.sheet.flush()
			tags.forEach(tag => {
				;(emotionCache.sheet as any)._insertTag(tag)
			})

			// reset cache to re-apply global styles
			clientStyleData.reset()
		}, [clientStyleData, emotionCache.sheet])

		return (
			<html lang='en'>
				<head>
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width,initial-scale=1' />
					{title ? <title>{title}</title> : null}
					<Meta />
					<Links />
					{serverStyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(' ')}`}
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>
				<body>
					{children}
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</body>
			</html>
		)
	}
)

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request)

	return { user }
}

export default function App() {
	const { user } = useLoaderData()

	return (
		<Document>
			<Layout user={user}>
				<Outlet />
			</Layout>
		</Document>
	)
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	word-wrap: wrap;

	h1 {
		color: #ff0000;
		font-size: 4rem;
	}

	p {
		font-size: 1.6rem;
		padding: 30px 3px;
	}

	a {
		font-size: 0.8rem;
	}
`

const Error = styled.div`
	display: flex;
	flex-direction: row;
`

export function CatchBoundary() {
	const { status, statusText } = useCatch()

	return (
		<Document title={`${status} ${statusText}`}>
			<Container>
				<h1>!اوپس</h1>
				{status === 404 ? (
					<Error>
						<p>صفحه پیدا نشد</p>
						<p>- 404</p>
						<p>خطای</p>
					</Error>
				) : (
					<p>
						{status} {statusText}
					</p>
				)}

				<Link to='/'>بازگشت به صفحه اصلی</Link>
			</Container>
		</Document>
	)
}

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<Document title='Error!'>
			<Container>
				<h1>Error!</h1>
				<p>{error.message}</p>
			</Container>
		</Document>
	)
}
