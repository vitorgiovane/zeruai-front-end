import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react'
import { StyledIconProps } from '@styled-icons/styled-icon'
import { ExclamationCircle } from '@styled-icons/fa-solid'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<StyledIconProps>
  themeColor: string
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  themeColor,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => setIsFocused(true), [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container
      themeColor={themeColor}
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
    >
      {Icon && <Icon size={14} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <ExclamationCircle color="#f42626" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Input
