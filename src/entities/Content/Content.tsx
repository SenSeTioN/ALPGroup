import Image from 'next/image'
import type { FC, ReactNode } from 'react'
import styles from './Content.module.scss'

type TContentProps = {
  children: ReactNode
  image: {
    src: string
    alt: string
  }
}

export const Content: FC<TContentProps> = ({ children, image }) => {
  return (
    <div className={styles.content}>
      {children}
      <div className={styles['content-img']}>
        <Image src={image.src} alt={image.alt} width={284} height={282} />
      </div>
    </div>
  )
}
