"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./AuthorizationSignIn.module.css";
import GlobalStyles from "./globals.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /personal_account при успешной отправке формы
    router.push("/forget_password3");
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /sign_in при клике на "Назад"
    router.push("/sign_in");
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/main_page">
            <h1 className={styles.logo}>FexRate</h1>
          </Link>
        </header>
        <h2 className={styles.title}>Забыли пароль?</h2>
        <p className={styles.description}>
          Введите адрес электронной почты, связанный с вашей учетной записью.
          Затем мы отправим вам код для восстановления и ссылку для сброса
          пароля.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.visuallyHidden}>
            Код
          </label>
          <input
            placeholder="Код"
            className={styles.inputField}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.submitButton}>
            Подтвердить
          </button>
        </form>
        <a href="#" className={styles.backLink} onClick={handleBackClick}>
          Назад
        </a>
      </div>
    </main>
  );
};

export default ForgotPassword;
