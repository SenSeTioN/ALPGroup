import { Text } from '@/shared'
import Image from 'next/image'
import styles from './Metrics.module.scss'
import { METRICS } from './constants'

export const Metrics = () => {
  return (
    <div className={styles.wrapper}>
      {METRICS.map((item) => (
        <div key={item.id} className={styles.metrics}>
          <div className={styles['metrics-icon-block']}>
            <Image src={item.icon.src} alt={item.icon.alt} width={80} height={80} />
            <Text tag='p' className={styles.subtitle}>
              {item.subtitle}
            </Text>
          </div>
          <div className={styles['metrics-content']}>
            <Text tag='p' size='s' weight='regular'>
              {item.title}
            </Text>
          </div>
        </div>
      ))}
    </div>
  )
}
