import classNames from 'classnames'
import styles from './Introduction.module.css'

export const Introduction = () => {
  return (
    <section
      id='introduction'
      className={classNames(styles.introduction, '_container')}
    >
      <p className={styles.name}>Hi, I am Juan Esteban</p>
      <p className={styles.profession}>Web developer</p>
    </section>
  )
}
