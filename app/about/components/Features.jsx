import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";
import Link from "next/link";
import conversionImage1 from "./img/calculator.svg";
import conversionImage2 from "./img/chart.svg";
import conversionImage3 from "./img/rocket.svg";
import conversionImage4 from "./img/dollar.svg";

const FeatureCard = ({ title, description, buttonText, image, link }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureImageWrapper}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={styles.featureImage}
        />
      )}
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <Link href={link}>
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
      image: conversionImage1,
      link: "/main_page"
    },
    {
      title: "Графики",
      description: "Изменения цен валюты, криптовалюты, акций и индексов 24/7",
      buttonText: "Перейти",
      image: conversionImage2,
      link: "/charts"
    },
    {
      title: "Индекс страха и жадности",
      description: "Наблюдайте онлайн за изменением настроения на рынках",
      buttonText: "Перейти",
      image: conversionImage3,
      link: "/charts"
    },
    {
      title: "Ежедневное изменение цены",
      description: "Регулярно следите за стоимостью тех или иных активов",
      buttonText: "Перейти",
      image: conversionImage4,
      link: "/main_page"
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
