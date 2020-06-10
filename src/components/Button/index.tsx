import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

import { StyledIconProps } from '@styled-icons/styled-icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<StyledIconProps>
  backgroundColor: string
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  backgroundColor,
  children,
  ...rest
}) => (
  <Container backgroundColor={backgroundColor} {...rest}>
    {children}
    {Icon && <Icon size={20} />}
  </Container>
)

export default Button
