import React from "react";
import styles from "./Features.module.css";

const FeatureCard = ({ title, description, buttonText }) => (
  <div className={styles.featureCard}>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <button className={styles.featureButton}>{buttonText}</button>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      title: "Конвертация",
      description: "Валюты, криптовалюты, акций и индексов 24/7",
      buttonText: "Перейти",
    },
    {
      title: "Графики",
      description: "Изменения цен валюты, криптовалюты, акций и индексов 24/7",
      buttonText: "Перейти",
    },
    {
      title: "Индекс страха и жадности",
      description: "Наблюдайте онлайн за изменением настроения на рынках",
      buttonText: "Перейти",
    },
    {
      title: "Ежедневное изменение цены",
      description: "Регулярно следите за стоимостью тех или иных активов",
      buttonText: "Перейти",
    },
  ];

  return (
    <section className={styles.features}>
      <h2 className={styles.featuresTitle}>Какой функционал предоставляем?</h2>
      <div className={styles.featureGrid}>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
