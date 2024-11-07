import React from "react";
import styles from "./PersonalCabinet.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FexRate</h1>
      <div className={styles.userProfile}>
        <div className={styles.avatarContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/36f50c89e43c6c69dd89e53456776eec96f674e15836ca25cf2c79e6b86ec27a?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
            alt="User avatar"
            className={styles.avatar}
          />
        </div>
        <span className={styles.username}>test_login</span>
      </div>
    </header>
  );
};

export default Header;
