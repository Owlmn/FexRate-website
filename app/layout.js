"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Array of paths where header should be disabled
  const noHeaderPaths = [
    // "/login_page",
    "/sign_in",
    "/sign_up",
    "/sign_up_apr",
    "/forget_password1",
    "/forget_password2",
    "/forget_password3",
  ];

  // Array of paths where footer should be disabled
  const noFooterPaths = [
    // "/login_page",
    "/sign_in",
    "/sign_up",
    "/sign_up_apr",
    "/forget_password1",
    "/forget_password2",
    "/forget_password3",
    "/personal_account",
  ];

  const shouldShowHeader = !noHeaderPaths.includes(pathname);
  const shouldShowFooter = !noFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        {shouldShowHeader && <Header />}
        <main>{children}</main>
        {shouldShowFooter && <Footer />}
      </body>
    </html>
  );
}
