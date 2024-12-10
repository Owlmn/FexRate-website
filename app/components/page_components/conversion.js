"use client";

import "./conversion.css";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BGD from "/app/public/img/background.svg";

export default function Conversion({ children }) {
  const [activeButton, setActiveButton] = useState("Валюта");
  const [selectedFromCurrency, setSelectedFromCurrency] = useState("USD");
  const [selectedToCurrency, setSelectedToCurrency] = useState("RUB");
  const [fromAmount, setFromAmount] = useState("1");
  const [toAmount, setToAmount] = useState("");
  const [fiatRates, setFiatRates] = useState({});
  const [cryptoRates, setCryptoRates] = useState({});
  const [fiatCurrencies, setFiatCurrencies] = useState({});
  const [cryptoCurrencies, setCryptoCurrencies] = useState({});
  const [isDropdownOpenFrom, setIsDropdownOpenFrom] = useState(false);
  const [isDropdownOpenTo, setIsDropdownOpenTo] = useState(false);
  const inputRef = useRef(null);
  const dropdownRefFrom = useRef(null);
  const dropdownRefTo = useRef(null);

  useEffect(() => {
    const fetchFiatRates = async () => {
      let date = new Date();
      let day = String(date.getDate()).padStart(2, "0");
      let rates = null;
      while (!rates) {
        try {
          const response = await fetch(
            `https://www.cbr-xml-daily.ru/archive/${date.getFullYear()}/${
              date.getMonth() + 1
            }/${day}/daily_json.js`
          );
          if (!response.ok) {
            throw new Error("Not found");
          }
          const json = await response.json();
          if (json.Valute) {
            rates = {
              RUB: 1,
              USD: json.Valute.USD.Value / json.Valute.USD.Nominal,
            };
            Object.entries(json.Valute).forEach(
              ([code, { Value, Nominal }]) => {
                if (code !== "RUB") {
                  rates[code] = Value / Nominal;
                }
              }
            );

            setFiatRates(rates);
            setFiatCurrencies({
              RUB: { name: "RUB", ruName: "Российский рубль", value: 1 },
              ...Object.fromEntries(
                Object.entries(json.Valute).map(([code, { Name }]) => [
                  code,
                  { name: code, ruName: Name },
                ])
              ),
            });
          }
        } catch (error) {
          date.setDate(date.getDate() - 1);
        }
      }
    };

    const fetchCryptoRates = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,BNB,ADA,DOGE,XRP,LTC,LINK,DOT,XLM,UNI,SOL,AVAX,LUNA,FIL,ALGO,ATOM,VET,THETA,TRX,EOS,XMR,DASH,ZEC,NEO,QTUM,ONT,BAT,MANA,GRT,AXS,CHZ,CUSD,YFI,AAVE,MKR,SNX,CRV,SUSHI,INCH&tsyms=USD"
        );
        const json = await response.json();
        const rates = {};
        Object.entries(json).forEach(([code, { USD }]) => {
          rates[code.toUpperCase()] = USD;
        });
        setCryptoRates(rates);
        setCryptoCurrencies({
          BTC: { name: "BTC", ruName: "Bitcoin" },
          ETH: { name: "ETH", ruName: "Ethereum" },
          USDT: { name: "USDT", ruName: "Tether" },
          BNB: { name: "BNB", ruName: "Binance Coin" },
          ADA: { name: "ADA", ruName: "Cardano" },
          DOGE: { name: "DOGE", ruName: "Dogecoin" },
          XRP: { name: "XRP", ruName: "XRP" },
          LTC: { name: "LTC", ruName: "Litecoin" },
          LINK: { name: "LINK", ruName: "Chainlink" },
          DOT: { name: "DOT", ruName: "Polkadot" },
          XLM: { name: "XLM", ruName: "Stellar" },
          UNI: { name: "UNI", ruName: "Uniswap" },
          SOL: { name: "SOL", ruName: "Solana" },
          AVAX: { name: "AVAX", ruName: "Avalanche" },
          LUNA: { name: "LUNA", ruName: "Terra" },
          FIL: { name: "FIL", ruName: "Filecoin" },
          ALGO: { name: "ALGO", ruName: "Algorand" },
          ATOM: { name: "ATOM", ruName: "Cosmos" },
          VET: { name: "VET", ruName: "VeChain" },
          THETA: { name: "THETA", ruName: "Theta" },
          TRX: { name: "TRX", ruName: "Tron" },
          EOS: { name: "EOS", ruName: "EOS" },
          XMR: { name: "XMR", ruName: "Monero" },
          DASH: { name: "DASH", ruName: "Dash" },
          ZEC: { name: "ZEC", ruName: "Zcash" },
          NEO: { name: "NEO", ruName: "Neo" },
          QTUM: { name: "QTUM", ruName: "Qtum" },
          ONT: { name: "ONT", ruName: "Ontology" },
          BAT: { name: "BAT", ruName: "Basic Attention Token" },
          MANA: { name: "MANA", ruName: "Decentraland" },
          GRT: { name: "GRT", ruName: "The Graph" },
          AXS: { name: "AXS", ruName: "Axie Infinity" },
          CHZ: { name: "CHZ", ruName: "Chiliz" },
          CUSD: { name: "CUSD", ruName: "Compound USD Coin" },
          YFI: { name: "YFI", ruName: "Yearn.finance" },
          AAVE: { name: "AAVE", ruName: "Aave" },
          MKR: { name: "MKR", ruName: "Maker" },
          SNX: { name: "SNX", ruName: "Synthetix" },
          CRV: { name: "CRV", ruName: "Curve DAO Token" },
          SUSHI: { name: "SUSHI", ruName: "SushiSwap" },
          INCH: { name: "1INCH", ruName: "1inch" },
        });
      } catch (error) {
        console.error("Error fetching crypto rates:", error);
      }
    };

    if (activeButton === "Валюта") {
      fetchFiatRates();
    } else if (activeButton === "Криптовалюта") {
      fetchCryptoRates();
    }
  }, [activeButton]);

  useEffect(() => {
    if (
      activeButton === "Валюта" &&
      Object.keys(fiatRates).length > 0 &&
      fromAmount
    ) {
      setToAmount(
        calculateConversion(
          fromAmount,
          selectedFromCurrency,
          selectedToCurrency,
          fiatRates
        )
      );
    } else if (
      activeButton === "Криптовалюта" &&
      Object.keys(cryptoRates).length > 0 &&
      fromAmount
    ) {
      setToAmount(
        calculateConversion(
          fromAmount,
          selectedFromCurrency,
          selectedToCurrency,
          cryptoRates
        )
      );
    }
  }, [
    activeButton,
    fiatRates,
    cryptoRates,
    selectedFromCurrency,
    selectedToCurrency,
    fromAmount,
  ]);

  const formatNumber = (value) => {
    if (!value) return "";
    const [integerPart, fractionalPart] = value.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      " "
    );
    if (fractionalPart) {
      // Remove trailing zeros
      const trimmedFractionalPart = fractionalPart.replace(/0+$/, "");
      return trimmedFractionalPart
        ? `${formattedIntegerPart}.${trimmedFractionalPart}`
        : formattedIntegerPart;
    }
    return formattedIntegerPart;
  };

  const calculateConversion = (amount, fromCurrency, toCurrency, rates) => {
    const numericValue = amount.toString().replace(/\s/g, "").replace(",", ".");
    const fromValue = parseFloat(numericValue);
    if (!isNaN(fromValue)) {
      const fromRate = rates[fromCurrency];
      const toRate = rates[toCurrency];
      if (fromRate && toRate) {
        const convertedAmount = ((fromValue * fromRate) / toRate).toFixed(5); // Исправление
        return formatNumber(convertedAmount);
      }
    }
    return "";
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/[^\d.,]/g, "");

    if (
      inputValue.startsWith("0") &&
      inputValue.length > 1 &&
      !inputValue.startsWith("0.")
    ) {
      inputValue = inputValue.replace(/^0+/, "0").replace(/^0+(\d+)/, "$1");
    }

    if (inputValue && !/^\d/.test(inputValue)) {
      return;
    }

    const numericValue = inputValue.replace(/\s/g, "").replace(",", ".");

    setFromAmount(formatNumber(numericValue));
    if (activeButton === "Валюта") {
      setToAmount(
        calculateConversion(
          numericValue,
          selectedFromCurrency,
          selectedToCurrency,
          fiatRates
        )
      );
    } else if (activeButton === "Криптовалюта") {
      setToAmount(
        calculateConversion(
          numericValue,
          selectedFromCurrency,
          selectedToCurrency,
          cryptoRates
        )
      );
    }
  };

  const handleKeyPress = (e) => {
    const key = e.keyCode || e.which;
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      ",",
      ".",
    ];
    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
    if (key === 13) {
      inputRef.current?.blur();
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setToAmount("");
    setFromAmount("1");
    if (buttonName === "Валюта") {
      setSelectedFromCurrency("USD");
      setSelectedToCurrency("RUB");
    } else if (buttonName === "Криптовалюта") {
      setSelectedFromCurrency("BTC");
      setSelectedToCurrency("USDT");
    }
  };

  const handleSwitch = () => {
    const tempCurrency = selectedFromCurrency;
    setSelectedFromCurrency(selectedToCurrency);
    setSelectedToCurrency(tempCurrency);

    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const toggleDropdownFrom = () => {
    setIsDropdownOpenFrom(!isDropdownOpenFrom);
    setIsDropdownOpenTo(false); // Close the other dropdown if open
  };

  const toggleDropdownTo = () => {
    setIsDropdownOpenTo(!isDropdownOpenTo);
    setIsDropdownOpenFrom(false); // Close the other dropdown if open
  };

  const handleCurrencySelectFrom = (currency) => {
    setSelectedFromCurrency(currency);
    setIsDropdownOpenFrom(false);
  };

  const handleCurrencySelectTo = (currency) => {
    setSelectedToCurrency(currency);
    setIsDropdownOpenTo(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefFrom.current &&
      !dropdownRefFrom.current.contains(event.target)
    ) {
      setIsDropdownOpenFrom(false);
    }
    if (
      dropdownRefTo.current &&
      !dropdownRefTo.current.contains(event.target)
    ) {
      setIsDropdownOpenTo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="convert">
        <div className="temp">
          <div className="conversion_text">Онлайн обмен 24/7</div>
          <div className="exchange_method">
            <div className="conversion_text2">Метод обмена</div>
            <button
              className={`currency_button ${
                activeButton === "Валюта" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Валюта")}
            >
              <div className="conversion_text">Валюта</div>
            </button>
            <button
              className={`currency_button ${
                activeButton === "Криптовалюта" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Криптовалюта")}
            >
              <div className="conversion_text">Криптовалюта</div>
            </button>
            {/* <button
              className={`currency_button ${
                activeButton === "Акции" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Акции")}
            >
              <div className="conversion_text">Акции</div>
            </button> */}
          </div>

          <Image src={BGD} alt="" className="background"></Image>

          <div className="input_currency">
            <text className="input_text">Вы вводите</text>
            <input
              type="text"
              ref={inputRef}
              placeholder="1"
              value={fromAmount}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <div
              className="currency_selector"
              onClick={toggleDropdownFrom}
              ref={dropdownRefFrom}
            >
              <div className="selected_currency">
                {activeButton === "Валюта"
                  ? fiatCurrencies[selectedFromCurrency]?.ruName
                  : cryptoCurrencies[selectedFromCurrency]?.ruName}{" "}
                ({selectedFromCurrency})
              </div>
              {isDropdownOpenFrom && (
                <div className="dropdown_menu">
                  {activeButton === "Валюта"
                    ? Object.entries(fiatCurrencies).map(
                        ([code, { name, ruName }]) => (
                          <div
                            key={code}
                            className="dropdown_item"
                            onClick={() => handleCurrencySelectFrom(code)}
                          >
                            {ruName} ({name})
                          </div>
                        )
                      )
                    : Object.entries(cryptoCurrencies).map(
                        ([code, { name, ruName }]) => (
                          <div
                            key={code}
                            className="dropdown_item"
                            onClick={() => handleCurrencySelectFrom(code)}
                          >
                            {ruName} ({name})
                          </div>
                        )
                      )}
                </div>
              )}
            </div>
          </div>
          <button className="switch" onClick={handleSwitch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
            >
              <path
                d="M0.292523 4.1041L4.28829 0.280363C4.64855 -0.0644436 5.2157 -0.0912113 5.60816 0.200063L5.70241 0.279597L9.70765 4.10334C10.0985 4.47635 10.0989 5.08165 9.70855 5.45522C9.34835 5.80003 8.78115 5.82689 8.38865 5.53552L8.29435 5.45608L6.001 3.26642L6.00101 13.3838C6.00101 13.874 5.61497 14.278 5.11763 14.3333L5.00101 14.3397C4.48817 14.3397 4.0655 13.9707 4.00774 13.4952L4.00101 13.3838L4.001 3.25973L1.70748 5.45532C1.34718 5.80003 0.779973 5.82689 0.387523 5.53543L0.293263 5.45599C-0.0674069 5.11157 -0.0954371 4.56936 0.209383 4.19415L0.292523 4.1041ZM14.8844 0.00954628L15.0011 0.00304604C15.5139 0.00304604 15.9366 0.372132 15.9943 0.847519L16.0011 0.958982L16.001 11.0764L18.2936 8.88369C18.6539 8.53898 19.2212 8.51221 19.6136 8.80358L19.7078 8.88311C20.0685 9.22754 20.0965 9.76976 19.7916 10.1449L19.7085 10.235L15.7123 14.0587C15.3519 14.4035 14.7847 14.4303 14.3923 14.1389L14.298 14.0594L10.2943 10.2356C9.90355 9.86249 9.90325 9.25723 10.2936 8.88369C10.6539 8.53898 11.2212 8.51221 11.6136 8.80358L11.7078 8.88311L14.001 11.0726L14.0011 0.958982C14.0011 0.468778 14.3871 0.064703 14.8844 0.00954628Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div className="output_currency">
            <text className="input_text">Вы получаете</text>
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder={
                (activeButton === "Валюта" &&
                  fiatRates[selectedToCurrency] &&
                  fiatRates[selectedFromCurrency] &&
                  (
                    (fromAmount * fiatRates[selectedToCurrency]) /
                    fiatRates[selectedFromCurrency]
                  ).toFixed(5)) ||
                (activeButton === "Криптовалюта" &&
                  cryptoRates[selectedToCurrency] &&
                  cryptoRates[selectedFromCurrency] &&
                  (
                    (fromAmount * cryptoRates[selectedToCurrency]) /
                    cryptoRates[selectedFromCurrency]
                  ).toFixed(5)) ||
                ""
              }
            />
            <div
              className="currency_selector"
              onClick={toggleDropdownTo}
              ref={dropdownRefTo}
            >
              <div className="selected_currency">
                {activeButton === "Валюта"
                  ? fiatCurrencies[selectedToCurrency]?.ruName
                  : cryptoCurrencies[selectedToCurrency]?.ruName}{" "}
                ({selectedToCurrency})
              </div>
              {isDropdownOpenTo && (
                <div className="dropdown_menu">
                  {activeButton === "Валюта"
                    ? Object.entries(fiatCurrencies).map(
                        ([code, { name, ruName }]) => (
                          <div
                            key={code}
                            className="dropdown_item"
                            onClick={() => handleCurrencySelectTo(code)}
                          >
                            {ruName} ({name})
                          </div>
                        )
                      )
                    : Object.entries(cryptoCurrencies).map(
                        ([code, { name, ruName }]) => (
                          <div
                            key={code}
                            className="dropdown_item"
                            onClick={() => handleCurrencySelectTo(code)}
                          >
                            {ruName} ({name})
                          </div>
                        )
                      )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
