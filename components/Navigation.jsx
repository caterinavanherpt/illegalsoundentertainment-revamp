import styles from './Navigation.module.css'

export default function Navigaion() {
    return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a className={styles.navListItemLink} href="/">Home</a>
          </li>
          <li className={styles.navListItem}> 
            <a className={styles.navListItemLink} href="/about">About</a>
          </li>
          <li className={styles.navListItem}>
            <a className={styles.navListItemLink} href="#testimonials">Testimonials</a>
          </li>
          <li className={styles.navListItem}>
            <a className={styles.navListItemLink} href="#referrals">Referrals</a>
          </li>
          <li className={styles.navListItem}>
            <a className={styles.navListItemLink} href="/gallery">Gallery</a>
          </li>
          <li className={styles.navListItem}>
            <a className={styles.navListItemLink} href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
    )
  }