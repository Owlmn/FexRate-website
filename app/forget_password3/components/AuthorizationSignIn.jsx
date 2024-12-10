"use client";

import React from "react";
import styles from "./AuthorizationSignIn.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault();
    // Перенаправление на страницу /sign_in при клике на "На страницу авторизации"
    router.push("/sign_in");
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Успех</h2>
        <p className={styles.description}>
          Ваш пароль был успешно восстановлен
        </p>
        <button className={styles.submitButton} onClick={handleBackClick}>
          На страницу авторизации
        </button>
      </div>
    </main>
  );
};

export default Success;
