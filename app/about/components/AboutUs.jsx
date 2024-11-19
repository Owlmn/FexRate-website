import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.aboutUsTitle}>Кто мы?</h2>
      <div className={styles.aboutUsContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/c47b2965713896de31669b7e31182d1f299192f930e82153e3bd0bda30d185ed?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt="About Us illustration"
          className={styles.aboutUsImage}
        />
        <div className={styles.aboutUsDescription}>
          <h3 className={styles.aboutUsSubtitle}>
            Простой и удобный конвертор
          </h3>
          <p className={styles.aboutUsText}>
            Вы можете конвертировать различные валюты, криптовалюты, узнать
            стоимость акций, посмотреть графики роста или падения цен
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
