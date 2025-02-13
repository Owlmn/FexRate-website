"use client";

import "./styles/globals.css";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Common/Header/Header";
import { Footer } from "@/app/components/Common/Footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Array of paths where header should be disabled
  const noHeaderPaths = [
    // "/login_page",
    "/sign_in",
    "/sign_up",
    "/forget_password1",
    "/forget_password2",
    "/forget_password3",
    "/personal_account",
  ];

  // Array of paths where footer should be disabled
  const noFooterPaths = [
    // "/login_page",
    "/sign_in",
    "/sign_up",
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
