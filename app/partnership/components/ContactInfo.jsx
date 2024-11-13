import React from "react";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  const contactMethods = [
    {
      title: "Рабочая почта",
      icon: "@",
      buttonText: "Связаться",
    },
    {
      title: "Telegram",
      icon: "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/fbf509207c2dcf6aa4d5ea144a6ff147e4929a04a9c54c983c82d8b86e94f29d?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&",
      buttonText: "Связаться",
    },
  ];

  return (
    <section className={styles.contactInfo}>
      <h2 className={styles.title}>Контакты для связи</h2>
      <div className={styles.contactContainer}>
        {contactMethods.map((method, index) => (
          <div key={index} className={styles.contactCard}>
            <div className={styles.contactHeader}>
              <h3 className={styles.contactTitle}>{method.title}</h3>
              {typeof method.icon === "string" &&
              method.icon.startsWith("http") ? (
                <img src={method.icon} alt="" className={styles.contactIcon} />
              ) : (
                <span className={styles.contactIcon}>{method.icon}</span>
              )}
            </div>
            <button className={styles.contactButton}>
              {method.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
