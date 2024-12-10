"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname !== "/login-page" && <Header />}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
