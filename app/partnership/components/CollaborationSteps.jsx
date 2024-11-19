import React from "react";
import styles from "./CollaborationSteps.module.css";

function CollaborationSteps() {
  const steps = [
    {
      number: "1",
      description:
        "Оставьте заявку онлайн в ЛК, связитесь с нами в telegram или по почте",
    },
    {
      number: "2",
      description:
        "Заполните анкету партнера и получите доступ в личный кабинет",
    },
    {
      number: "3",
      description:
        "Дождитесь решения о сотрудничестве и приготовтесь покорять мир вместе",
    },
  ];

  return (
    <section className={styles.collaborationSteps}>
      <h2 className={styles.title}>Как начать сотрудничать?</h2>
      <p className={styles.subtitle}>Всего 3 простых шага</p>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.number}</div>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollaborationSteps;
