import React from "react";
import styles from "./PersonalCabinet.module.css";
import UserInfo from "./UserInfo";
import FavoritesList from "./FavoritesList";
import HeaderPersonalCabinet from "./HeaderPersonalCabinet";
// import ActionButtons from "./ActionButtons";
// import TransactionHistory from "./TransactionHistory";

const PersonalCabinet = () => {
  return (
    <div className={styles.personalCabinet}>
      <main className={styles.mainContent}>
        <HeaderPersonalCabinet />
        <div className={styles.leftColumn}>
          <UserInfo />
          {/* <ActionButtons /> */}
        </div>
        <div className={styles.rightColumn}>
          <FavoritesList />
        </div>
        {/* <div className={styles.rightColumn}>
          <TransactionHistory />
        </div> */}
      </main>
    </div>
  );
};

export default PersonalCabinet;
