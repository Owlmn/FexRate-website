import React from "react";
import styles from "./PersonalCabinet.module.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import FavoritesList from "./FavoritesList";
import ActionButtons from "./ActionButtons";
import TransactionHistory from "./TransactionHistory";

const PersonalCabinet = () => {
  return (
    <div className={styles.personalCabinet}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <UserInfo />
          <FavoritesList />
          <ActionButtons />
        </div>
        <div className={styles.rightColumn}>
          <TransactionHistory />
        </div>
      </main>
    </div>
  );
};

export default PersonalCabinet;
