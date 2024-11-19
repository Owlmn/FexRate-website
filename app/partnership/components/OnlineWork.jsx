import React from "react";
import styles from "./OnlineWork.module.css";

function OnlineWork() {
  const features = [
    {
      title: "Быстро",
      subtitle: "FAST",
      description:
        "Не занимающая много времени регистрация, но удобное отображение Ваших доходов",
    },
    {
      title: "Безопасно",
      subtitle: "SAFE",
      description:
        "Все данные являются строго конфиденциальными, о ваших действиях на сайте знаете только Вы",
    },
  ];

  return (
    <section className={styles.onlineWork}>
      <h2 className={styles.title}>Вся работа онлайн в личном кабинете</h2>
      <p className={styles.subtitle}>
        Не нужно куда-то ездить, все вопросы решаем по интернету
      </p>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureHeader}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <span className={styles.featureSubtitle}>{feature.subtitle}</span>
            </div>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OnlineWork;
