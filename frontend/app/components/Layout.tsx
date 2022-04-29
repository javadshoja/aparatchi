import Header from './Header'
function Layout({ children, user }: any) {
	return (
		<>
			<Header user={user} />
			{children}
		</>
	)
}

export default Layout
