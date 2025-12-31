import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.skChase}>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
    </div>
  );
}
