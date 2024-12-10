"use client";

import React, { useState, useEffect } from "react";
import styles from "./PersonalCabinet.module.css";
import ActionButtons from "./ActionButtons"; // Импортируйте компонент ActionButtons

const UserInfo = () => {
  const [userFields, setUserFields] = useState([
    { label: "Логин", value: "" },
    { label: "Имя", value: "" },
    { label: "Фамилия", value: "" },
    { label: "Почта", value: "" },
    { label: "Пароль", value: "", isPassword: true },
  ]);

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Состояние для отслеживания активного элемента

  useEffect(() => {
    const savedFields = localStorage.getItem("userFields");
    if (savedFields) {
      setUserFields(JSON.parse(savedFields));
    }
  }, []);

  const handleChange = (index, newValue) => {
    const newFields = [...userFields];
    newFields[index].value = newValue;
    setUserFields(newFields);
    localStorage.setItem("userFields", JSON.stringify(newFields));
  };

  const handleSave = () => {
    localStorage.setItem("userFields", JSON.stringify(userFields));
    console.log("Сохранено:", userFields);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Скрыть сообщение через 3 секунды
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={`${styles.userInfo} ${styles.leftColumn}`}>
      <h2 className={styles.sectionTitle}>Мои данные</h2>
      <div className={styles.userInfoGrid}>
        {userFields.map((field, index) => (
          <React.Fragment key={index}>
            <div
              className={`${styles.fieldLabel} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {field.label}
            </div>
            <div className={styles.fieldValue}>
              {field.isPassword ? (
                <div className={styles.passwordField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={field.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className={styles.inputField}
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/70d9f2526071f2b4889833ea5bffaecb3aba9325d5d0f516da04abb3a1f4e426?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                    alt="Show password"
                    className={styles.showPasswordIcon}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ) : (
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className={styles.inputField}
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.saveButtonContainer}>
        <button onClick={handleSave} className={styles.saveButton}>
          Сохранить
        </button>
        <ActionButtons />
      </div>
      {showSuccessMessage && (
        <div className={styles.successMessage}>Изменения успешно сохранены</div>
      )}
    </section>
  );
};

export default UserInfo;
