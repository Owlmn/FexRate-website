import React from "react";
import styles from "./PersonalCabinet.module.css";

const UserInfo = () => {
  const userFields = [
    { label: "Логин", value: "test_login" },
    { label: "Имя", value: "Матвей" },
    { label: "Фамилия", value: "Батистов" },
    { label: "Почта", value: "Example12345@gmail.com" },
    { label: "Пароль", value: "Example12345$", isPassword: true },
  ];

  return (
    <section className={styles.userInfo}>
      <h2 className={styles.sectionTitle}>Мои данные</h2>
      <div className={styles.userInfoGrid}>
        {userFields.map((field, index) => (
          <React.Fragment key={index}>
            <div className={styles.fieldLabel}>{field.label}</div>
            <div className={styles.fieldValue}>
              {field.isPassword ? (
                <div className={styles.passwordField}>
                  <span>{field.value}</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/70d9f2526071f2b4889833ea5bffaecb3aba9325d5d0f516da04abb3a1f4e426?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                    alt="Show password"
                    className={styles.showPasswordIcon}
                  />
                </div>
              ) : (
                field.value
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default UserInfo;
