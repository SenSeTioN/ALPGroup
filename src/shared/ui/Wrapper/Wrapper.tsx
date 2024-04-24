import cx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Wrapper.module.scss'

interface IWrapperProps {
  children: ReactNode
  size: 'm' | 'l'
  className?: string
}

export const Wrapper: FC<IWrapperProps> = ({ children, size, className }) => {
  return <div className={cx(styles.wrapper, styles[`wrapper-${size}`], className)}>{children}</div>
}
