import cx from 'clsx'
import { createElement, FC, ReactNode } from 'react'
import styles from './Text.module.scss'

interface ITextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: ReactNode
  size?: 'xs' | 's' | 'm' | 'ml' | 'l'
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export const Text: FC<ITextProps> = ({ tag, children, weight, className, size }) => {
  const Text = ({ ...props }) => createElement(tag, { ...props }, children)

  return (
    <Text
      className={cx(styles.text, {
        [styles[`text-${weight}`]]: weight,
        [styles[`text-${size}`]]: size,
        [className as string]: className,
      })}>
      {children}
    </Text>
  )
}
