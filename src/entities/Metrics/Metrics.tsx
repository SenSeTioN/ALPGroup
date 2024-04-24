import { Text } from '@/shared'
import Image from 'next/image'
import styles from './Metrics.module.scss'
import { METRICS } from './constants'

export const Metrics = () => {
  return (
    <div className={styles.wrapper}>
      {METRICS.map((item) => (
        <div key={item.id} className={styles.metrics}>
          <Image src={item.icon.src} alt={item.icon.alt} width={70} height={115} />
          <Text tag='p' size='s' weight='regular' className={styles['metrics__text']}>
            {item.title}
          </Text>
        </div>
      ))}
    </div>
  )
}
