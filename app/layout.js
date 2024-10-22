"use client";

import "./globals.css";
import {Header} from "@/app/components/Header/Header";

export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        </body>
        </html>
    );
}
