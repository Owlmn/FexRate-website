"use client";

import React, { useEffect, useState } from "react";
import { fetchCurrencyData } from "/app/api/charts/FetchRates.js";
import MiniChart from "./MiniChart";
import styles from "./CurrencyCharts.module.css";
import Image from "next/image";

const currencyNames = {
    RUB: "Российский рубль",
    AFN: "Афгани",
    ALL: "Албанский лек",
    AMD: "Армянский драм",
    ANG: "Нидерландский антильский гульден",
    AOA: "Ангольская кванза",
    ARS: "Аргентинский песо",
    ATS: "Австрийский шиллинг",
    AUD: "Австралийский доллар",
    AZN: "Азербайджанский манат",
    BAM: "Конвертируемая марка",
    BDT: "Бангладешская така",
    BEF: "Бельгийский франк",
    BGN: "Болгарский лев",
    BIF: "Бурундийский франк",
    BND: "Брунейский доллар",
    BOB: "Боливийский боливиано",
    BRL: "Бразильский реал",
    BTN: "Бутанский нгултрум",
    BWP: "Ботсванская пула",
    BYN: "Белорусский рубль",
    BZD: "Белизский доллар",
    CAD: "Канадский доллар",
    CDF: "Конголезский франк",
    CHF: "Швейцарский франк",
    CLF: "Чилийская расчетная единица",
    CLP: "Чилийский песо",
    CNY: "Китайский юань",
    COP: "Колумбийский песо",
    CRC: "Коста-риканский колон",
    CUP: "Кубинский песо",
    CVE: "Эскудо Кабо-Верде",
    CYP: "Кипрский фунт",
    CZK: "Чешская крона",
    DEM: "Немецкая марка",
    DJF: "Джибутийский франк",
    DKK: "Датская крона",
    DOP: "Доминиканский песо",
    DZD: "Алжирский динар",
    EEK: "Эстонская крона",
    EGP: "Египетский фунт",
    ESP: "Испанская песета",
    ETB: "Эфиопский быр",
    EUR: "Евро",
    FIM: "Финская марка",
    FJD: "Фиджийский доллар",
    FKP: "Фунт Фолклендских островов",
    FRF: "Французский франк",
    GBP: "Английский фунт",
    GEL: "Грузинский лари",
    GGP: "Гернсийский фунт",
    GHS: "Ганский седи",
    GIP: "Гибралтарский фунт",
    GMD: "Даласи",
    GNF: "Гвинейский франк",
    GRD: "Греческая драхма",
    GTQ: "Гватемальский кетсаль",
    GYD: "Гайанский доллар",
    HKD: "Гонконгский доллар",
    HNL: "Гондурасская лемпира",
    HRK: "Хорватская куна",
    HTG: "Гаитянский гурд",
    HUF: "Венгерский форинт",
    IDR: "Индонезийская рупия",
    IEP: "Ирландский фунт",
    ILS: "Новый израильский шекель",
    IMP: "Фунт острова Мэн",
    INR: "Индийская рупия",
    IQD: "Иракский динар",
    IRR: "Иранский риал",
    ISK: "Исландская крона",
    ITL: "Итальянская лира",
    JEP: "Джерсийский фунт",
    JMD: "Ямайский доллар",
    JPY: "Японская иена",
    KES: "Кенийский шиллинг",
    KGS: "Киргизский сом",
    KHR: "Камбоджийский риель",
    KMF: "Коморский франк",
    KPW: "Северокорейская вона",
    KRW: "Южнокорейская вона",
    KWD: "Кувейтский динар",
    KYD: "Доллар Каймановых островов",
    KZT: "Казахстанский тенге",
    LAK: "Лаосский кип",
    LBP: "Ливанский фунт",
    LKR: "Шри-ланкийская рупия",
    LRD: "Либерийский доллар",
    LSL: "Лоти",
    LTL: "Литовский лит",
    LVL: "Латвийский лат",
    LYD: "Ливийский динар",
    MAD: "Марокканский дирхам",
    MDL: "Молдавский лей",
    MGA: "Малагасийский ариари",
    MKD: "Македонский денар",
    MMK: "Мьянмская кьята",
    MNT: "Монгольский тугрик",
    MOP: "Патака",
    MRO: "Мавританская угия",
    MRU: "Мавританская угия (новая)",
    MTL: "Мальтийская лира",
    MUR: "Маврикийская рупия",
    MVR: "Мальдивская руфия",
    MWK: "Малавийская квача",
    MXN: "Мексиканский песо",
    MYR: "Малайзийский ринггит",
    MZN: "Мозамбикский метикал",
    NAD: "Доллар Намибии",
    NGN: "Найра",
    NIO: "Никарагуанская кордоба",
    NOK: "Норвежская крона",
    NPR: "Непальская рупия",
    NZD: "Новозеландский доллар",
    OMR: "Оманский риал",
    PEN: "Перуанский соль",
    PGK: "Кина",
    PHP: "Филиппинское песо",
    PKR: "Пакистанская рупия",
    PLN: "Польский злотый",
    PYG: "Парагвайский гуарани",
    RON: "Румынский лей",
    RSD: "Сербский динар",
    RWF: "Франк Руанды",
    SBD: "Доллар Соломоновых Островов",
    SCR: "Сейшельская рупия",
    SDG: "Суданский фунт",
    SEK: "Шведская крона",
    SGD: "Сингапурский доллар",
    SHP: "Фунт Святой Елены",
    SLL: "Сьерра-леонский леоне",
    SOS: "Сомалийский шиллинг",
    SRD: "Суринамский доллар",
    SYP: "Сирийский фунт",
    SZL: "Лилангени",
    THB: "Таиландский бат",
    TJS: "Таджикский сомони",
    TMT: "Туркменский манат",
    TND: "Тунисский динар",
    TOP: "Паанга",
    TRY: "Турецкая лира",
    TTD: "Доллар Тринидада и Тобаго",
    TVD: "Доллар Тувалу",
    TWD: "Новый тайваньский доллар",
    TZS: "Танзанийский шиллинг",
    UAH: "Украинская гривна",
    UGX: "Угандийский шиллинг",
    UYU: "Уругвайский песо",
    UZS: "Узбекский сум",
    VND: "Вьетнамский донг",
    XAF: "Центральноафриканский франк",
    XCD: "Восточно-карибский доллар",
    XOF: "Западноафриканский франк",
    YER: "Йеменский риал",
    ZAR: "Южноафриканский ранд",
    ZMW: "Замбийская квача",
    ZWL: "Зимбабвийский доллар"
};

const CurrencyChart = ({ period, showFavoritesOnly = false }) => {
    const [currencies, setCurrencies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const now = new Date();
                const formatDate = (date) => date.toISOString().split("T")[0];
                const startDate = new Date(now);

                if (period === "week") startDate.setDate(now.getDate() - 7);
                if (period === "month") startDate.setMonth(now.getMonth() - 1);
                if (period === "threeMonths") startDate.setMonth(now.getMonth() - 3);

                const data = await fetchCurrencyData("USD", formatDate(startDate), formatDate(now));

                if (!data || !data.response) throw new Error("Данные API недоступны.");

                const ratesByDate = data.response;
                const currencyList = Object.keys(currencyNames);

                const formattedCurrencies = currencyList.map((currency) => {
                    const labels = Object.keys(ratesByDate).sort();
                    const dataPoints = labels.map((date) => ratesByDate[date]["USD"] / ratesByDate[date][currency]);
                    const currentValue = dataPoints[dataPoints.length - 1];
                    const previousValue = dataPoints[0];
                    const changePercent = (((currentValue - previousValue) / previousValue) * 100).toFixed(2);

                    return {
                        name: currencyNames[currency] || currency,
                        code: currency,
                        price: currentValue.toFixed(4),
                        change: changePercent,
                        dataPoints,
                    };
                });

                setCurrencies(formattedCurrencies);

                const favoritesResponse = await fetch("/api/favorites", {
                    method: "GET",
                    credentials: "include",
                });
                const favoritesData = await favoritesResponse.json();
                setFavorites(favoritesData.favorites || []);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [period]);

    const toggleFavorite = async (currencyCode) => {
        try {
            const isFavorite = favorites.includes(currencyCode);
            const response = await fetch("/api/favorites", {
                method: isFavorite ? "DELETE" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chartId: currencyCode }),
            });

            if (response.ok) {
                setFavorites((prev) =>
                    isFavorite ? prev.filter((code) => code !== currencyCode) : [...prev, currencyCode]
                );
            }
        } catch (err) {
            console.error("Ошибка обновления избранного:", err);
        }
    };

    const filteredCurrencies = currencies.filter((currency) => {
        const matchesSearch = currency.name.toLowerCase().includes(searchQuery);
        const matchesFavorites = !showFavoritesOnly || favorites.includes(currency.code);
        return matchesSearch && matchesFavorites;
    });

    return (
        <div className={styles.currencyList}>
            {error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <>
                    <div className={styles.buttonContainer}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Поиск по валютам"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                        />
                    </div>

                    {filteredCurrencies.slice(0, showAll ? filteredCurrencies.length : 7).map((currency) => (
                        <div key={currency.code} className={styles.currencyRow}>
                            <div className={styles.currencyInfo}>
                                <p className={styles.currencyName}>{currency.name}</p>
                                <p className={styles.currencyCode}>{currency.code}</p>
                                <p className={styles.currencyPrice}>{currency.price} $</p>
                                <p
                                    className={`${styles.currencyChange} ${
                                        currency.change < 0 ? styles.negative : styles.positive
                                    }`}
                                >
                                    {currency.change}%
                                </p>
                            </div>
                            <MiniChart dataPoints={currency.dataPoints} />
                            <button
                                className={`${styles.favoriteButton} ${
                                    favorites.includes(currency.code) ? styles.favorited : ""
                                }`}
                                onClick={() => toggleFavorite(currency.code)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.58699 8.236L11.185 3.004C11.2606 2.85259 11.3769 2.72523 11.5209 2.63622C11.6648 2.54721 11.8307 2.50006 12 2.50006C12.1692 2.50006 12.3351 2.54721 12.4791 2.63622C12.6231 2.72523 12.7394 2.85259 12.815 3.004L15.413 8.236L21.221 9.08C21.3885 9.10323 21.5461 9.17309 21.6759 9.28161C21.8056 9.39013 21.9022 9.53294 21.9546 9.69373C22.0071 9.85452 22.0133 10.0268 21.9725 10.191C21.9317 10.3551 21.8456 10.5045 21.724 10.622L17.522 14.692L18.514 20.442C18.641 21.18 17.861 21.742 17.194 21.394L12 18.678L6.80499 21.394C6.13899 21.743 5.35899 21.18 5.48599 20.441L6.47799 14.691L2.27599 10.621C2.15498 10.5034 2.06939 10.3542 2.02896 10.1903C1.98852 10.0265 1.99487 9.85457 2.04726 9.69415C2.09966 9.53373 2.19601 9.39122 2.32536 9.28284C2.45471 9.17445 2.61188 9.10452 2.77899 9.081L8.58699 8.236Z"
                                        fill="currentColor" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    ))}

                    <button className={styles.showMoreButton} onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Скрыть" : "Показать все"}
                    </button>
                </>
            )}
        </div>
    );
};

export default CurrencyChart;

