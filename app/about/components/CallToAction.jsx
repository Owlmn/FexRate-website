import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.ctaIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/7c3e15aeb6819fa7079aff32a98237be6195dfa27330557ae6b442196f0ff197?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/e8f338a3ee62601334d1b0a9d59c3af28335f4011ccb30be9e511a167166fa5d?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/a30e33b35dff59058df53f19f6f09e9e0745dcb5a91575e9095254728e5b5553?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
      </div>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Давайте уже конвертировать</h2>
        <p className={styles.ctaDescription}>
          Так просто и удобно не было никогда
        </p>
        <button className={styles.ctaButton}>Перейти</button>
      </div>
      <div className={styles.ctaIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/672ced4ec3189fd8d2eb63ea9ad699d0d10b4cd008226821409d7f172e136e6b?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/644424459e112781db642c6b0f04ce6db39f0b837df64b9a7b0f526020013f35?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/c5292542df843147c6c4489994c6e7cba8f5e048b28a2c22cf03664fc66dc905?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt=""
          className={styles.ctaIcon}
        />
      </div>
    </section>
  );
};

export default CallToAction;
