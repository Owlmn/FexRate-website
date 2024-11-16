import React from "react";
import styles from "./ContactInfo.module.css";
import Image from "next/image";
import Image3 from "./telegram.svg";
import Image4 from "./email.svg";

function ContactInfo() {
  const contactMethods = [
    {
      title: "Рабочая почта",
      icon: <Image src={Image4} alt="" />,
      buttonText: "Связаться",
      link: "https://workspace.google.com/intl/ru/gmail",
    },
    {
      title: "Telegram",
      icon: <Image src={Image3} alt="" />,
      buttonText: "Связаться",
      link: "https://t.me/eruma1ra",
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
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              {method.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
