"use client";

import "./globals.css";
import { Conversion } from "@/app/components/converting block/conversion";
import Image from "next/image";
import Bit from "./icons/bitcoin.svg";
import Image1 from "./icons/Vector.svg";
import Usdt from "./icons/usdt.svg";
import Eth from "./icons/eth.svg";
import Sol from "./icons/sol.svg";
import Ton from "./icons/ton.svg";
import Dot from "./icons/dot.svg";
import Matic from "./icons/matic.svg";
import Rub from "./icons/rub.svg";
import Usd from "./icons/usd.svg";
import Euro from "./icons/euru.svg";
import Cny from "./icons/cny.svg";
import Jpy from "./icons/jpy.svg";
import Simple from "./img/img_block1.png";
import Time from "./img/img_block2.png";
import Secure from "./img/img_block3.png";
import NoReg from "./img/img_block4.png";
import Reviews from "./img/img_block5.png";
import Line from "./icons/punct_line.svg";
import Arrow from "./icons/arrow.svg";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="content">
      <Conversion />
      <div className="section2">
        <text className="section2_text">Популярные обменные пары</text>
        <div className="section2_block">
          <text className="section2_text">Криптовалюта</text>
          <text className="section2_text">Валюта</text>
          <div className="currency_list">
            <div className="section2_example_block">
              <text className="section2_text">1</text>
              <div className="icon_container">
                <Image src={Bit} alt="" />
                <text className="section2_text">BTC</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Usdt} alt="" />
                <text className="section2_text">USDT</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">2</text>
              <div className="icon_container">
                <Image src={Eth} alt="" />
                <text className="section2_text">ETH</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Usdt} alt="" />
                <text className="section2_text">USDT</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">3</text>
              <div className="icon_container">
                <Image src={Sol} alt="" />
                <text className="section2_text">SOL</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Ton} alt="" />
                <text className="section2_text">TON</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">4</text>
              <div className="icon_container">
                <Image src={Dot} alt="" />
                <text className="section2_text">DOT</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Matic} alt="" />
                <text className="section2_text">MATIC</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">5</text>
              <div className="icon_container">
                <Image src={Bit} alt="" />
                <text className="section2_text">BTC</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Eth} alt="" />
                <text className="section2_text">ETH</text>
              </div>
            </div>
          </div>
          <div className="currency_list2">
            <div className="section2_example_block">
              <text className="section2_text">1</text>
              <div className="icon_container">
                <Image src={Usd} alt="" />
                <text className="section2_text">USD</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Rub} alt="" />
                <text className="section2_text">RUB</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">2</text>
              <div className="icon_container">
                <Image src={Euro} alt="" />
                <text className="section2_text">EUR</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Rub} alt="" />
                <text className="section2_text">RUB</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">3</text>
              <div className="icon_container">
                <Image src={Usd} alt="" />
                <text className="section2_text">USD</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Euro} alt="" />
                <text className="section2_text">EUR</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">4</text>
              <div className="icon_container">
                <Image src={Rub} alt="" />
                <text className="section2_text">RUB</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Cny} alt="" />
                <text className="section2_text">CNY</text>
              </div>
            </div>
            <div className="section2_example_block">
              <text className="section2_text">5</text>
              <div className="icon_container">
                <Image src={Rub} alt="" />
                <text className="section2_text">RUB</text>
              </div>
              <Image src={Image1} alt="" className="vector" />
              <div className="icon_container">
                <Image src={Jpy} alt="" />
                <text className="section2_text">JPY</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design_circle1"></div>
      <div className="section3">
        <text className="section2_text">Почему мы?</text>
        <div className="wrapper">
          <div className="section3_block1">
            <div className="section2_text">Простота</div>
            <Image src={Simple} alt="" className="section3_img_1"></Image>
            <text className="description">
              Мы ценим ваше время, поэтому создали самый простой конвертор валют
              во всем интернете
            </text>
          </div>
          <div className="section3_block1">
            <div className="section2_text">Время работы</div>
            <Image src={Time} alt="" className="section3_img_2"></Image>
            <text className="description">
              Наш сервис работает 24/7 без выходных и праздников. Конвертируйте
              валюту когда вам удобно
            </text>
          </div>
          <div className="section3_block1">
            <div className="section2_text">Приватность</div>
            <Image src={Secure} alt="" className="section3_img_3"></Image>
            <text className="description">
              Все ваши действия полность приватны, никто не видит ваши
              ковертации, кроме вас
            </text>
          </div>
          <div className="section3_block1">
            <div className="section2_text">Без регистрации</div>
            <Image src={NoReg} alt="" className="section3_img_4"></Image>
            <text className="description">
              Наш сервис работает как с регистрацией, так и без неё. Выбор
              всегда за вами
            </text>
          </div>
        </div>
      </div>
      <div className="section4">
        <text className="section2_text">Как это работает</text>
        <div className="section4_block">
          <div className="steps">
            <div className="step_item">
              <text className="number">1</text>
            </div>
            <Image src={Line} alt=""></Image>
            <div className="step_item">
              <text className="number">2</text>
            </div>
            <Image src={Line} alt=""></Image>
            <div className="step_item">
              <text className="number">3</text>
            </div>
            <Image src={Arrow} alt=""></Image>
            <div className="step_item">
              <text className="number_special">4</text>
            </div>
          </div>
          <div className="step_description">
            <text className="description">Выбираете то, что хотите менять</text>
            <text className="description">
              Выбираете то, на что хотите менять
            </text>
            <text className="description">Нажимаете на кнопу “Обменять”</text>
            <text className="description">Обмен готов!</text>
          </div>
        </div>
      </div>
      <div className="design_circle2"></div>
      <div className="section5">
        <Image src={Reviews} alt="" className="section5_img"></Image>
        <div className="section2_text">
          Вы можете ознакомиться с различными отзывами от наших клиентов
        </div>
        <Link href="" className="review_link">
          <text>Подробнее {">>"}</text>
        </Link>
      </div>
      <div className="section6">
        <text className="section6_text">Давайте конвертировать</text>
        <text className="section6_text1">
          Это слишком просто и удобно, чтобы даже не попробовать
        </text>
        <button
          className="btn_link_to_convers"
          onClick={() => window.scrollTo(0, 0)}
        >
          <text className="description">Перейти к конвертации</text>
        </button>
        <Image src={Bit} alt="" className="icon1"></Image>
        <Image src={Eth} alt="" className="icon2"></Image>
        <Image src={Usdt} alt="" className="icon3"></Image>
        <Image src={Usd} alt="" className="icon4"></Image>
        <Image src={Rub} alt="" className="icon5"></Image>
        <Image src={Euro} alt="" className="icon6"></Image>
      </div>
    </div>
  );
}


