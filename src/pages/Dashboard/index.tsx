import React, { useState, useCallback } from 'react'
import { User } from '@styled-icons/fa-solid'

import { Container, Content, Menu, Plan, TopBar } from './styles'
import logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  interface UserProps {
    name: string
    email: string
  }
  const { signOut, user } = useAuth()

  const handleMouseEnter = useCallback(() => {
    setVisibleMenu(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setVisibleMenu(false)
  }, [])

  const handleLogOut = useCallback(() => {
    signOut()
  }, [signOut])

  return (
    <Container>
      <TopBar>
        <img src={logo} alt="Zeruai" />
        <h1>Dashboard</h1>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span>{user.name}</span>
          <User size={18} />
          <Menu visible={visibleMenu}>
            <li>{user.email}</li>
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </Menu>
        </div>
      </TopBar>
      <Content>
        <Plan>
          <h1>My Bronze Plan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button>View more</button>
        </Plan>
        <Plan>
          <h1>My Silver Plan </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button>View more</button>
        </Plan>
        <Plan>
          <h1>My Gold Plan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button>View more</button>
        </Plan>
      </Content>
    </Container>
  )
}

export default Dashboard
