import styled from '@emotion/styled'
import { Link as link } from 'remix'
import { IoLogInOutline } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { Button } from './styles'
import { useEffect, useState } from 'react'

function Header({ user }: any) {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		function handelScroll() {
			if (window.scrollY > 0) setIsScrolled(true)
			else setIsScrolled(false)
		}

		window.addEventListener('scroll', handelScroll)

		return () => {
			window.removeEventListener('scroll', handelScroll)
		}
	}, [])
	return (
		<HeaderContainer className={`${isScrolled && 'enable-scroll'}`}>
			<Logo to='/'>Aparatchi</Logo>
			<nav>
				<Items>
					{user ? (
						<Item>
							<form action='/auth/logout' method='POST'>
								<Button type='submit'>{user.name} خروج از حساب</Button>
							</form>
						</Item>
					) : (
						<>
							<Item>
								<Link to='/login'>
									ورود <IoLogInOutline />
								</Link>
							</Item>
							<Item>
								<Link to='/register'>
									ثبت نام <AiOutlineUserAdd />
								</Link>
							</Item>
						</>
					)}
				</Items>
			</nav>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 20px 5%;
	position: fixed;
	top: 0;
	z-index: 999;
`

const Items = styled.ul`
	display: flex;
	justify-content: space-between;
`

const Item = styled.li`
	padding: 0 20px;
`

const Link = styled(link)`
	display: flex;
	align-items: center;
	gap: 7px;
	color: #fff;

	svg {
		font-size: 1.4rem;
	}
`

const Logo = styled(Link)`
	font-size: 1.4rem;
	font-weight: 600;
	color: #eb1145;
`
