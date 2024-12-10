"use client";

import React from "react";
import styles from "./CollaborationIntro.module.css";

function CollaborationIntro() {
  return (
    <section className={styles.intro}>
      <p className={styles.subtitle}>Сотрудничество с FexRate</p>
      <h2 className={styles.title}>Сотрудничество для ЮР/ФИЗ лиц</h2>
      <p className={styles.description}>
        Заключите договор о сотрудничестве и станьте нашим партнером
      </p>
      <button
        className={styles.actionButton}
        onClick={() => (window.location.href = "https://t.me/eruma1ra")}
      >
        Стать партнером
      </button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/effcf47daa7429e507a2356906468a1e90273d8b52b908d914b8b7353f51dc6c?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
        alt="Партнерство с FexRate"
        className={styles.partnershipImage}
      />
    </section>
  );
}

export default CollaborationIntro;
