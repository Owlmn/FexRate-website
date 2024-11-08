import React, { useState } from 'react';
import styles from './AuthorizationSignIn.module.css';

const AuthorizationSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.logo}>FexRate</h1>
          <nav className={styles.navItem}>
            <img src="/images/home-icon.svg" alt="" className={styles.navIcon} />
            <span>Главная</span>
          </nav>
        </header>
        <h2 className={styles.title}>Войти</h2>
        <p className={styles.registerPrompt}>
          До сих пор нет аккаунта?{" "}
          <span className={styles.registerLink}>Зарегистрироваться</span>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.visuallyHidden}>Почта</label>
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
            <label htmlFor="password" className={styles.visuallyHidden}>Пароль</label>
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
                src={showPassword ? "/images/hide-password.svg" : "/images/show-password.svg"}
                alt=""
                className={styles.passwordIcon}
              />
            </button>
          </div>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </form>
        <a href="#" className={styles.forgotPassword}>Забыли пароль?</a>
      </div>
    </main>
  );
};

export default AuthorizationSignIn;
