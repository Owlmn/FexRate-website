import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const footerLinks = [
    {
      title: "FexRate",
      links: ["Конвертиация", "Графики", "О нас", "Сотрудничество"],
    },
    { title: "Информация", links: ["Правила", "Поддержка"] },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <h2 className={styles.footerLogo}>FexRate</h2>
          <p className={styles.footerDescription}>Создано FexRate Team</p>
          <div className={styles.socialIcons}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/776fd74ffb34ff1c75c3fc279bbefd1fe086c0662f29d82ee70bdea80652a9eb?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
              alt="Social Icon 1"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/bb0b6454752fd787d35c73c28c402fa64de559acece4f86f1f140fd274323a35?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
              alt="Social Icon 2"
              className={styles.socialIcon}
            />
          </div>
          <p className={styles.copyright}>
            Copyright © 2024 FexRate Team. All Rights Reserved
          </p>
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((section, index) => (
            <div key={index} className={styles.linkSection}>
              <h3 className={styles.linkTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
