import React, { InputHTMLAttributes } from 'react'
import { StyledIconProps } from '@styled-icons/styled-icon'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<StyledIconProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={24} />}
    <input {...rest} />
  </Container>
)

export default Input
