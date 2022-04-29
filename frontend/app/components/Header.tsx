import styled from '@emotion/styled'
import { Link as link } from 'remix'
import { IoLogInOutline } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { Button } from './styles'

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 5%;
	position: sticky;
	top: 0;
	z-index: 999;
`

const Navbar = styled.nav``

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

function Header({ user }: any) {
	return (
		<HeaderContainer>
			<Logo to='/'>Aparatchi</Logo>
			<Navbar>
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
			</Navbar>
		</HeaderContainer>
	)
}

export default Header
