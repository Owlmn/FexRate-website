"use client";

import "./conversion.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import USD from "/app/public/icons/usd.svg";
import RUB from "/app/public/icons/rub.svg";

export default function Conversion({ children }) {
  const [activeButton, setActiveButton] = useState("Валюта");
  const [dollars, setDollars] = useState("");
  const [rubles, setRubles] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");

  useEffect(() => {
    (async () => {
      let date = new Date();
      let [, year, month, day] = date
        .toJSON()
        .match("([0-9]+)-([0-9]+)-([0-9]+)");
      console.log([day, month, year]);
      const response = await fetch(
        `https://www.cbr-xml-daily.ru/archive/${year}/${month}/${day}/daily_json.js`
      );
      const json = await response.json();
      setExchangeRate(json.Valute.USD.Value);
    })();
  }, []);

  const handleConvert = () => {
    const dollarsValue = parseFloat(dollars.replace(",", "."));
    if (!isNaN(dollarsValue)) {
      setRubles((dollarsValue * exchangeRate).toFixed(4));
    } else {
      setRubles("");
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setRubles(null);
  };

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
            <button
              className={`currency_button ${
                activeButton === "Акции" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Акции")}
            >
              <div className="conversion_text">Акции</div>
            </button>
          </div>

          <div className="rectangle"></div>

          <div className="input_currency">
            <text className="input_text">Вы вводите</text>
            <input
              type="text"
              placeholder="1"
              value={dollars}
              onChange={(e) => setDollars(e.target.value)}
            />
            <div className="currency_type">
              <Image src={USD} alt="" className="icon" />
              <div className="currency_type_text">USD</div>
            </div>
          </div>
          <div className="switch">
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
          </div>
          <div className="output_currency">
            <text className="input_text">Вы получаете</text>
            <input
              type="text"
              value={rubles}
              readOnly
              placeholder={exchangeRate}
            />

            <div className="currency_type">
              <Image src={RUB} alt="" className="icon" />
              <div className="currency_type_text">RUB</div>
            </div>
          </div>
          <button className="convert_button" onClick={handleConvert}>
            <div className="conversion_text">Конвертировать</div>
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
