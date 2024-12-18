"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ children }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="box">
      <div className="nav-menu">
        <Link href="/main_page" className="title">
          FexRate
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar1 ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${isMenuOpen ? "change" : ""}`}></div>
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            href="/main_page"
            className={pathname === "/main_page" ? "active" : ""}
          >
            Конвертация
          </Link>
          <Link
            href="/charts"
            className={pathname === "/charts" ? "active" : ""}
          >
            Графики
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            О нас
          </Link>
          <Link
            href="/partnership"
            className={pathname === "/partnership" ? "active" : ""}
          >
            Сотрудничество
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Header;
