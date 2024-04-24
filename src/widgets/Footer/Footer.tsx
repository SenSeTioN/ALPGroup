import { Contacts, Politics } from '@/entities'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Contacts />
      <Politics />
    </footer>
  )
}
