"use client";

import React, { useEffect, useState } from "react";
import { fetchCurrencyData } from "/app/api/charts/FetchRates.js";
import MiniChart from "./MiniChart";
import styles from "./CurrencyCharts.module.css";

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

const CurrencyChart = ({ period }) => {
    const [currencies, setCurrencies] = useState([]);
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

                const data = await fetchCurrencyData("USD", formatDate(startDate), formatDate(now)); // Используем доллар как базовую валюту
                if (!data || !data.response) throw new Error("Данные API недоступны.");

                const ratesByDate = data.response;

                const currencyList = Object.keys(currencyNames); // Используем все валюты из currencyNames

                const formattedCurrencies = currencyList.map((currency) => {
                    const labels = Object.keys(ratesByDate).sort();

                    const dataPoints = labels.map((date) => ratesByDate[date]["USD"] / ratesByDate[date][currency]); // Преобразуем данные относительно USD

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
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [period]);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredCurrencies = currencies.filter((currency) =>
        currency.name.toLowerCase().includes(searchQuery)
    );

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
                            onChange={handleSearchChange}
                        />
                    </div>

                    {filteredCurrencies.slice(0, showAll ? filteredCurrencies.length : 7).map((currency) => (
                        <div key={currency.code} className={styles.currencyRow}>
                            <div className={styles.currencyInfo}>
                                <p className={styles.currencyName}>{currency.name}</p>
                                <p className={styles.currencyCode}>{currency.code}</p>
                                <p className={styles.currencyPrice}>{currency.price} $</p> {/* Цена в долларах */}
                                <p
                                    className={`${styles.currencyChange} ${
                                        currency.change < 0 ? styles.negative : styles.positive
                                    }`}
                                >
                                    {currency.change}%
                                </p>
                            </div>
                            <MiniChart dataPoints={currency.dataPoints} />
                        </div>
                    ))}
                    <button className={styles.showMoreButton} onClick={toggleShowAll}>
                        {showAll ? "Скрыть" : "Показать все"}
                    </button>
                </>
            )}
        </div>
    );
};

export default CurrencyChart;
