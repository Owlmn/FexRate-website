"use client";

import "./styles/globals.css";
import { usePathname } from 'next/navigation';
import {Header} from "@/app/components/Common/Header/Header";
import {Footer} from "@/app/components/Common/Footer/Footer";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
        <html lang="en">
        <body>
          {pathname !== '/login_page' && <Header />}
          <main>{children}</main>
          {pathname !== '/login_page' && <Footer />}
        </body>
        </html>
    );
}
