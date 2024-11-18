import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.heroTitle}>FexRate</h2>
      <div className={styles.heroContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/d9bb23dc1c4486f3c08b5cbd1aec9cc1d91432789c36791c71670bc3b0533cd7?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.heroIcon}
        />
        <div className={styles.heroBackground}></div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/0dd4535ed1226d1c7df4756c2f9f541f6f7d566735a3e683b46c4950aaef3eb8?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.heroIcon}
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/5ea29bea472309c68098dd9b0793aa68e6caadc02b95996c8e69fa7456841df6?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
        alt="Hero illustration"
        className={styles.heroImage}
      />
      <p className={styles.heroDescription}>
        Уникальная и очень простая платформа для тех, кто ценит свое время и
        регулярно конвертирует деньги
      </p>
    </section>
  );
};

export default Hero;
