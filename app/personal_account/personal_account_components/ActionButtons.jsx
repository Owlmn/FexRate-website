import React from "react";
import styles from "./PersonalCabinet.module.css";

const ActionButtons = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch("/api/user", { method: "DELETE" });
            const data = await response.json();

            if (response.ok) {
                window.location.href = "/main_page";
            } else {
                console.error(data.message);
                alert("Ошибка при выходе из системы");
            }
        } catch (error) {
            console.error("Ошибка при выходе:", error);
            alert("Не удалось выйти из системы");
        }
    };


    const handleHelp = () => {
    window.location.href = "https://t.me/eruma1ra";
  };

  return (
    <div className={styles.actionButtons}>
      <button className={styles.actionButton} onClick={handleLogout}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/540f9fd33c0c5ae8a5e8d1441174cc00190bd8da7853552ca4d29fd44ec68902?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt="Logout Icon"
          className={styles.buttonIcon}
        />
        <span>Выход</span>
      </button>
      <button className={styles.actionButton} onClick={handleHelp}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/c0d99777575e086dfb4c0ce143dac5e830fd94247766d96de3285485534fb03c?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
          alt="Help Icon"
          className={styles.buttonIcon}
        />
        <span>Помощь</span>
      </button>
    </div>
  );
};

export default ActionButtons;
