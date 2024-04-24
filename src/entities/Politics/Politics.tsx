import { Text } from '@/shared'
import styles from './Politics.module.scss'

export const Politics = () => {
  return (
    <div className={styles['footer-politics']}>
      <Text tag='h3' className={styles['footer-politics__title']}>
        © 2023 site.RU
      </Text>
      <Text tag='h3' className={styles['footer-politics__title']}>
        Все права защищены
      </Text>
      <Text tag='p' size='xs'>
        Дата последнего обновления сайта: 07.02.2023
      </Text>
    </div>
  )
}
