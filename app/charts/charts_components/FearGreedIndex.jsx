"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FearGreedIndex.module.css";
import Image from "next/image";
import grph from "./grph.svg";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FearGreedIndex = () => {
  const [indexData, setIndexData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.alternative.me/fng/?limit=30"
        );
        const data = response.data.data;
        setIndexData(data[0]);

        // Сортируем данные в обратном порядке
        const sortedData = data.reverse();

        const chartLabels = sortedData.map((item) => item.timestamp);
        const chartValues = sortedData.map((item) => item.value);

        const getColor = (value) => {
          if (value < 40) return "rgba(150, 0, 0, 1)"; // Темно-красный
          if (value < 60) return "rgba(150, 150, 0, 1)"; // Темно-желтый
          return "rgba(0, 100, 0, 1)"; // Темно-зеленый
        };

        const backgroundColors = chartValues.map((value) => getColor(value));
        const borderColors = chartValues.map((value) => getColor(value));

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: "Fear and Greed Index",
              data: chartValues,
              borderColor: (context) => {
                const { chart, datasetIndex, dataIndex } = context;
                const value = chart.data.datasets[datasetIndex].data[dataIndex];
                return getColor(value);
              },
              backgroundColor: (context) => {
                const { chart, datasetIndex, dataIndex } = context;
                const value = chart.data.datasets[datasetIndex].data[dataIndex];
                return getColor(value);
              },
              pointBackgroundColor: backgroundColors,
              pointBorderColor: borderColors,
              segment: {
                borderColor: (context) => {
                  const { p0, p1 } = context;
                  const value = (p0.parsed.y + p1.parsed.y) / 2;
                  return getColor(value);
                },
              },
              borderWidth: 2,
            },
          ],
          options: {
            scales: {
              x: {
                ticks: {
                  display: false, // Убираем цифры под осью X
                },
                grid: {
                  color: "rgba(0, 0, 0, 0.1)",
                  borderDash: [5, 5], // Пунктирная линия
                },
              },
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)",
                  borderDash: [5, 5], // Пунктирная линия
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
                onClick: (e) => e.stopPropagation(), // Отключаем функцию скрытия графика при нажатии на легенду
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => {
                    const value = context.parsed.y;
                    return `Fear and Greed Index: ${value}`;
                  },
                  title: () => null, // Убираем заголовок тултипа
                },
              },
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!indexData || !chartData) {
    return <div>Loading...</div>;
  }

  const getColor = (value) => {
    if (value < 40) return "rgba(150, 0, 0, 1)"; // Темно-красный
    if (value < 60) return "rgba(150, 150, 0, 1)"; // Темно-желтый
    return "rgba(0, 100, 0, 1)"; // Темно-зеленый
  };

  return (
    <section className={styles.fearGreedIndex}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.iconPlaceholder}>
            <Image src={grph} alt="" />
          </div>
          <h2 className={styles.title}>
            Индекс <br />
            страха и жадности
          </h2>
          <p className={styles.text}>
            Отражает, какие настроения преобладают на биржах
          </p>
        </div>
        <div className={styles.chart}>
          <div
            className={styles.chartValue}
            style={{ color: getColor(indexData.value) }}
          >
            {indexData.value}
          </div>
          <div className={styles.chartClassification}>
            {indexData.value_classification}
          </div>
          <div className={styles.chartImagePlaceholder}>
            <Line data={chartData} options={chartData.options} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearGreedIndex;
