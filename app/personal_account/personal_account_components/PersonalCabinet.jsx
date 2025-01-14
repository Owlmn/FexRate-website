"use client";

import React, { useState, useEffect } from "react";
import styles from "./PersonalCabinet.module.css";
import UserInfo from "./UserInfo";
import FavoritesList from "./FavoritesList";
import FavCharts from "@/app/personal_account/personal_account_components/chartButtons.jsx";
import HeaderPersonalCabinet from "./HeaderPersonalCabinet";

const PersonalCabinet = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const checkUp = await fetch("/api/favorites", {
          method: "GET",
          credentials: "include",
        });

        if (!checkUp.ok) {
          throw new Error(`Ошибка: ${checkUp.status} ${checkUp.statusText}`);
        }

        const favData = await checkUp.json();
        console.log(favData);

        if (Array.isArray(favData.favorites) && favData.favorites.length !== 0) {
          setVisibility(true);
          console.log("Избранное загружено:", favData.favorites);
        } else {
          console.warn("Нет данных в избранном");
        }

      } catch (error) {
        console.error("Ошибка при загрузке избранного:", error.message);
      }
    };

    fetchFavorites();
  }, []);

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
          {visibility && (
              <div className={styles.leftColumn}>
                <FavCharts />
              </div>
          )}
        </main>
      </div>
  );
};

export default PersonalCabinet;
