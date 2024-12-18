"use client";

import React, { useState } from "react";
import styles from "./AuthorizationSignIn.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthorizationSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/personal_account");
      } else {
        alert(`Ошибка: ${data.message}`);
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      alert("Произошла ошибка при регистрации. Попробуйте позже.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <main className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Link href="/main_page">
              <h1 className={styles.logo}>FexRate</h1>
            </Link>
          </header>
          <h2 className={styles.title}>Зарегистрироваться</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="firstName" className={styles.visuallyHidden}>
              Имя
            </label>
            <input
                type="text"
                id="firstName"
                placeholder="Имя"
                className={styles.inputField}
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName" className={styles.visuallyHidden}>
              Фамилия
            </label>
            <input
                type="text"
                id="lastName"
                placeholder="Фамилия"
                className={styles.inputField}
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="username" className={styles.visuallyHidden}>
              Логин
            </label>
            <input
                type="text"
                id="username"
                placeholder="Логин"
                className={styles.inputField}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

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

            {/* Agreement Checkbox */}
            <div className={styles.checkboxContainer}>
              <input
                  type="checkbox"
                  id="agreement"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className={styles.checkboxInput}
              />
              <label htmlFor="agreement" className={styles.checkboxLabel}>
                Нажимая, я соглашаюсь с политикой и правилами компании
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </main>
  );
};

export default AuthorizationSignIn;
