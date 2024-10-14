"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en">
        <body>
        <div class="nav-menu">
            <a className="title">FexRate</a>
            <nav>
                <Link href="/" className={pathname === '/' ? 'active' : ''}>Конвертация</Link>
                <Link href="/charts" className={pathname === '/charts' ? 'active' : ''}>Графики</Link>
            </nav>
        </div>
        {children}
        </body>
        </html>
    );
}
