import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

import { StyledIconProps } from '@styled-icons/styled-icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<StyledIconProps>
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => (
  <Container {...rest}>
    {children}
    {Icon && <Icon size={26} />}
  </Container>
)

export default Button
