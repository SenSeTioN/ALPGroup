import { Text } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Contacts.module.scss'
import { LINKS } from './constants'

export const Contacts = () => {
  return (
    <div className={styles['footer-contacts']}>
      <Text tag='h3' className={styles['footer-contacts__title']}>
        СВЯЖИТЕСЬ С НАМИ
      </Text>

      {LINKS.map((item) => (
        <div key={item.id} className={styles['footer-contacts__links']}>
          <Link href={item.href}>
            <Image src={item.icon} alt={item.title} width={item.width} height={item.height} />
          </Link>
          <Link href={item.href}>
            <Text tag='p' className={styles['footer-contacts__links-title']}>
              {item.title}
            </Text>
          </Link>
        </div>
      ))}
    </div>
  )
}
