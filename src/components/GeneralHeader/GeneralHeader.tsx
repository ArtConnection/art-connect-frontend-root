import reactSvg from "assets/react.svg";
import styles from "./GeneralHeader.module.scss";

export const GeneralHeader = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={reactSvg} alt="ASN" className={styles.logoImage} />
        <span className={styles.logoText}>Artists Social Network</span>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/gallery" className={styles.navLink}>
              Gallery
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/artists" className={styles.navLink}>
              Artists
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
