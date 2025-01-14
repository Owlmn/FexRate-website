import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "@/app/charts/charts_components/CurrencyCharts.module.css";

const MiniChart = ({ dataPoints }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Храним экземпляр графика

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        // Удаляем старый график, если он уже существует
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Создаём новый график
        const gradient = ctx.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, "rgba(128, 0, 128, 1)");
        gradient.addColorStop(1, "rgba(0, 255, 255, 1)");

        chartInstanceRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: dataPoints.map((_, index) => index), // Позиции вместо дат
                datasets: [
                    {
                        data: dataPoints,
                        borderColor: gradient,
                        backgroundColor: "rgba(0,0,0,0)", // Убираем область под графиком
                        fill: false, // Убираем заливку под графиком
                        borderWidth: 2, // Тонкая линия
                    },
                ],
            },
            options: {
                responsive: false, // Отключаем адаптивность
                maintainAspectRatio: false, // Отключаем сохранение пропорций
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
                elements: {
                    point: {
                        radius: 0, // Убираем точки на графике
                    },
                },
            },
        });

        // Уничтожаем график при размонтировании компонента
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [dataPoints]);

    return <canvas ref={chartRef} style={{ width: "170px", height: "50px", marginRight: "4rem"}}></canvas>;
};

export default MiniChart;
