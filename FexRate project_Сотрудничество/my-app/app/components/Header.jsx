import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>FexRate</h1>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li>
              <a href="#conversion" className={styles.navLink}>
                Конвертация
              </a>
            </li>
            <li>
              <a href="#charts" className={styles.navLink}>
                Графики
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                О нас
              </a>
            </li>
            <li>
              <a href="#collaboration" className={styles.navLink}>
                Сотрудничество
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.loginButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/e0ef12a6b0d8fa56e26ee1ce067acb065065c3eb3aab551373515b531dfd96a5?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
            alt=""
            className={styles.loginIcon}
          />
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
