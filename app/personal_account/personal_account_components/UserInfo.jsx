"use client";

import React, { useState, useEffect } from "react";
import styles from "./PersonalCabinet.module.css";
import ActionButtons from "./ActionButtons";
import openedEye from "/app/public/icons/basil_eye-outline.svg"
import closedEye from "/app/public/icons/basil_eye-closed-outline.svg"
import Image from "next/image";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных пользователя");
      }

      const data = await response.json();

      setUserFields([
        { label: "Логин", value: data.user.username || "" },
        { label: "Имя", value: data.user.firstName || "" },
        { label: "Фамилия", value: data.user.lastName || "" },
        { label: "Почта", value: data.user.email || "" },
        { label: "Пароль", value: "", isPassword: true },
      ]);
    } catch (error) {
      console.error("Ошибка получения данных:", error);
      setError("Не удалось загрузить данные пользователя");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (index, newValue) => {
    const newFields = [...userFields];
    newFields[index].value = newValue;
    setUserFields(newFields);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: userFields[0].value,
          name: userFields[1].value,
          surname: userFields[2].value,
          password: userFields[4].value || undefined, // Пароль обновляем только если он задан
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при сохранении данных на сервере");
      }

      await fetchUserData();

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Ошибка сохранения данных:", error);
      setError("Не удалось сохранить изменения");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
      <section className={`${styles.userInfo} ${styles.leftColumn}`}>
        <h2 className={styles.sectionTitle}>Мои данные</h2>
        <div className={styles.userInfoGrid}>
          {userFields.map((field, index) => (
              <React.Fragment key={index}>
                <div className={styles.fieldLabel}>{field.label}</div>
                <div className={styles.fieldValue}>
                  {field.isPassword ? (
                      <div className={styles.passwordField}>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={field.value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className={styles.inputField}
                            placeholder="Введите новый пароль"
                        />
                        <Image
                            src={showPassword ? openedEye : closedEye}
                            alt="Показать пароль"
                            className={styles.showPasswordIcon}
                            onClick={togglePasswordVisibility}
                            style={{cursor: "pointer"}}
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
