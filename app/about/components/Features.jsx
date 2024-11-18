import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";
import Link from "next/link";
import conversionImage from "./calculator-front-color.png";

const FeatureCard = ({ title, description, buttonText, image }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureImageWrapper}>
      <img src={image} alt={title} className={styles.featureImage} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <Link href="/">
      <button className={styles.featureButton}>{buttonText}</button>
    </Link>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      title: "Конвертация",
      description: "Валюты, криптовалюты, акций и индексов 24/7",
      buttonText: "Перейти",
      image: <Image src={conversionImage} alt="" />,
    },
    {
      title: "Графики",
      description: "Изменения цен валюты, криптовалюты, акций и индексов 24/7",
      buttonText: "Перейти",
      image: "",
    },
    {
      title: "Индекс страха и жадности",
      description: "Наблюдайте онлайн за изменением настроения на рынках",
      buttonText: "Перейти",
      image: "",
    },
    {
      title: "Ежедневное изменение цены",
      description: "Регулярно следите за стоимостью тех или иных активов",
      buttonText: "Перейти",
      image: "",
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
