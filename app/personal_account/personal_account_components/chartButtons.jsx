"use client"

import React, { useState } from "react";
import CurrencyChart from "/app/charts/charts_components/CurrencyCharts.jsx";
import styles from "/app/charts/charts_components/CurrencyCharts.module.css";

const FavCharts = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("week");
    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    return (
        <div className={styles.ChartContainer}>
            <div className={styles.chartSwitcher}>
                <div className={styles.buttonContainer}>
                    <button
                        className={`${styles.switchButton} ${selectedPeriod === "week" ? styles.active : ""}`}
                        onClick={() => handlePeriodChange("week")}
                    >
                        1 неделя
                    </button>
                    <button
                        className={`${styles.switchButton} ${selectedPeriod === "month" ? styles.active : ""}`}
                        onClick={() => handlePeriodChange("month")}
                    >
                        1 месяц
                    </button>
                    <button
                        className={`${styles.switchButton} ${selectedPeriod === "threeMonths" ? styles.active : ""}`}
                        onClick={() => handlePeriodChange("threeMonths")}
                    >
                        3 месяца
                    </button>
                </div>

                <CurrencyChart period={selectedPeriod} showFavoritesOnly={true}/>
            </div>
        </div>
    );
};

export default FavCharts;
