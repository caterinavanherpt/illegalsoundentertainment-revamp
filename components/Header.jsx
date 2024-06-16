import Navigaion from "./Navigation"
import styles from './Navigation.module.css';

export default function Header({ title }) {
  return (
    <>
      <header className={styles.header}>
        {/* insert skip nav */}
        <Navigaion/>
      </header>
    </>
  )
}
