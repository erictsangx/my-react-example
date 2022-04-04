import { css } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'

const Button = styled('button')(
  ({ theme }) => css`
    color: white;
    //border: 1px solid white;
    padding: 6px 12px;
    border-radius: 4px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.sky_500};

    /**
   * ripple effect
   * 1. set background center and transition
   * 2. hover: set bg-color, bg-image(effect), bg-position
   * 3. active: reset style, trigger hover animation 
   */
    background-position: center;
    transition: background 0.8s;

    :hover {
      background: ${theme.colors.sky_400}
        radial-gradient(circle, transparent 1%, ${theme.colors.sky_400} 1%)
        center/15000%;
    }

    :active {
      background-color: ${theme.colors.sky_500};
      background-size: 100%;
      transition: background 0s;
    }
  `,
)

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler
}

export function RippleButton({
  children,
  type = 'button',
  className,
  ...props
}: RippleButtonProps): JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type
    <Button className={cn(className)} type={type} {...props}>
      {children}
    </Button>
  )
}
