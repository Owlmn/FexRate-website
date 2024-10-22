"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css"

export function Header({ children }) {
    const pathname = usePathname();

    return (
        <div>
        <div className="nav-menu">
            <div className="title">FexRate</div>
            <nav>
                <Link href="/" className={pathname === '/' ? 'active' : ''}>Конвертация</Link>
                <Link href="/charts" className={pathname === '/charts' ? 'active' : ''}>Графики</Link>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''}>О нас</Link>
                <Link href="/partnership" className={pathname === '/partnership' ? 'active' : ''}>Сотрудничество</Link>
                <button className="login-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                        <path
                            d="M7.8 16.9C7.46863 16.9 7.2 16.6313 7.2 16.3C7.2 15.9687 7.46863 15.7 7.8 15.7H15.6C16.9255 15.7 18 14.6255 18 13.3V3.69998C18 2.37449 16.9255 1.29998 15.6 1.29998H7.8C7.46863 1.29998 7.2 1.03134 7.2 0.699976C7.2 0.368608 7.46863 0.0999756 7.8 0.0999756H15.6C17.5883 0.0999756 19.2 1.71176 19.2 3.69998V13.3C19.2 15.2883 17.5883 16.9 15.6 16.9H7.8ZM7.97574 3.87572C8.21005 3.64139 8.58995 3.64139 8.82426 3.87572L13.0243 8.07572C13.2586 8.31003 13.2586 8.68993 13.0243 8.92429L8.82426 13.1243C8.58995 13.3585 8.21005 13.3585 7.97574 13.1243C7.74142 12.8899 7.74142 12.51 7.97574 12.2757L11.1515 9.09997H0.6C0.268632 9.09997 0 8.8313 0 8.49998C0 8.16861 0.268632 7.89998 0.6 7.89998H11.1515L7.97574 4.72424C7.74142 4.48992 7.74142 4.11003 7.97574 3.87572Z"
                            fill="white"/>
                    </svg>
                    Войти
                </button>
            </nav>
        </div>
            {children}
        </div>
    );
}
