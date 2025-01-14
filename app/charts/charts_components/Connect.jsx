"use client"

import React, { useState } from "react";
import CurrencyChart from "./CurrencyCharts";
import GrowthChart from "./GrowthChart";
import FearGreedIndex from "./FearGreedIndex";
import styles from "./CurrencyCharts.module.css";

const Connect = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("week");
    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    return (
        <main>
            <GrowthChart />
            <FearGreedIndex />

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

                    <CurrencyChart period={selectedPeriod}
                                   title={`График за ${selectedPeriod === "week" ? "неделю" : "месяц"}`}/>
                </div>
            </div>
        </main>
    );
};

export default Connect;
