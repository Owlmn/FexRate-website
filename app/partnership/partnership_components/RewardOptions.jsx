import React from "react";
import styles from "./RewardOptions.module.css";

function RewardOptions() {
  const options = [
    {
      title: "Рекламное размещение",
      description:
        "Закажите у нас рекламную интеграцию Вашего продукта на нашем сайте",
      icon: "●",
    },
    {
      title: "До 25% от прибыли компании",
      description:
        "Каждый месяц в течение года получаете процент от прибыли компании",
      icon: "●●",
    },
  ];

  return (
    <section className={styles.rewardOptions}>
      <h2 className={styles.title}>
        Выбирайте удобную форму партнерского вознаграждения
      </h2>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.optionCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{option.icon}</span>
            </div>
            <h3 className={styles.optionTitle}>{option.title}</h3>
            <p className={styles.optionDescription}>{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RewardOptions;
