import Link from "next/link";
import "./Footer.css";
import Image from "next/image";
import Image1 from "./telegram.svg";
import Image2 from "./github.svg";

export function Footer({ children }) {
  return (
    <div>
      <div className="footer-box">
        <div className="footer-container">
          <div className="block_1">
            <div className="list">
              <Link href="/" className="f-title">
                FexRate
              </Link>
              <div className="text1">Создано FexRate Team</div>
              <div className="logo">
                <a href="https://t.me/DerekHax">
                  <Image src={Image1} alt="" />
                </a>
                <a href="https://github.com/Owlmn/FexRate-website">
                  <Image src={Image2} alt="" />
                </a>
              </div>
              <div className="text2c">
                Copyright © 2024 FexRate Team. All Rights Reserved
              </div>
            </div>
          </div>
          <div className="block_2">
            <div className="list2">
              <Link href="/" className="f2-title">
                FexRate
              </Link>
              <ul className="text2">
                <Link href="/">
                  <li>Конвертация</li>
                </Link>
                <Link href="/charts">
                  <li>Графики</li>
                </Link>
                <Link href="/about">
                  <li>О нас</li>
                </Link>
                <Link href="/partnership">
                  <li>Сотрудничество</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="block_3">
            <div className="list2">
              <div className="f2-title">Информация</div>
              <ul className="text2">
                <li>
                  <a
                    href="https://t.me/eruma1ra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Поддержка
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/eruma1ra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Правила
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
