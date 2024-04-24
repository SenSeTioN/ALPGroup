import cx from 'clsx'
import type { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  width: 'standard' | 'large' | 'medium'
  theme?: 'light' | 'primary'
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  className?: string
}

export const Button: FC<IButton> = ({
  theme,
  children,
  onClick,
  className,
  type = 'button',
  disabled,
  width = 'standard',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(styles.btn, {
        [styles[`btn-${theme}`]]: theme,
        [styles[`btn-${width}`]]: width,
        [className as string]: className,
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}
