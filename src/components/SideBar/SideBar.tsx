import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";

export const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <h2 className={styles.title}>Side Bar</h2>
      <ul className={styles.list}>
        <li className={styles.link}>
          <Link to="/" className={styles.navLink}>
            Главная
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/profile" className={styles.navLink}>
            Мой профиль
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/communities" className={styles.navLink}>
            Сообщества
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/activities" className={styles.navLink}>
            Мои активности
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/notifications" className={styles.navLink}>
            Уведомления
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/messages" className={styles.navLink}>
            Сообщения
          </Link>
        </li>
      </ul>
    </div>
  );
};
