import React from "react";
import styles from "./Advantages.module.css";

const AdvantageCard = ({ title, description }) => (
  <div className={styles.advantageCard}>
    <h3 className={styles.advantageTitle}>{title}</h3>
    <p className={styles.advantageDescription}>{description}</p>
  </div>
);

const Advantages = () => {
  const advantagesData = [
    { title: "24/7", description: "Работа сервиса" },
    { title: "Быстрая", description: "Работа поддержки" },
    { title: "Простота", description: "Интуитивно простой сайт" },
    { title: "Контакты", description: "Всех разработчиков проекта" },
    { title: "Регулярные", description: "Улучшения сервиса" },
  ];

  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
      <div className={styles.advantageGrid}>
        {advantagesData.map((advantage, index) => (
          <AdvantageCard key={index} {...advantage} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
