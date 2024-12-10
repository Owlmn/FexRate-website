"use client";

import React, { useState } from "react";
import styles from "./AuthorizationSignIn.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthorizationSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /personal_account при успешной отправке формы
    router.push("/personal_account");
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /sign_up при клике на "Зарегистрироваться"
    router.push("/sign_up");
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /forget_password1 при клике на "Забыли пароль?"
    router.push("/forget_password1");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/">
            <h1 className={styles.logo}>FexRate</h1>
          </Link>
        </header>
        <h2 className={styles.title}>Войти</h2>
        <p className={styles.registerPrompt}>
          До сих пор нет аккаунта?{" "}
          <Link href="/sign_up" onClick={handleRegisterClick}>
            <span className={styles.registerLink}>Зарегистрироваться</span>
          </Link>
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.visuallyHidden}>
            Почта
          </label>
          <input
            type="email"
            id="email"
            placeholder="Почта"
            className={styles.inputField}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.passwordContainer}>
            <label htmlFor="password" className={styles.visuallyHidden}>
              Пароль
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Пароль"
              className={styles.passwordInput}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.passwordToggle}
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              <img
                src={
                  showPassword
                    ? "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/70d9f2526071f2b4889833ea5bffaecb3aba9325d5d0f516da04abb3a1f4e426?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                    : "https://cdn.builder.io/api/v1/image/assets/449dd0928ae94f98b3877c3e4f2d9f26/70d9f2526071f2b4889833ea5bffaecb3aba9325d5d0f516da04abb3a1f4e426?apiKey=449dd0928ae94f98b3877c3e4f2d9f26&"
                }
                alt=""
                className={styles.passwordIcon}
              />
            </button>
          </div>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </form>
        <a
          href="#"
          className={styles.forgotPassword}
          onClick={handleForgotPasswordClick}
        >
          Забыли пароль?
        </a>
      </div>
    </main>
  );
};

export default AuthorizationSignIn;
