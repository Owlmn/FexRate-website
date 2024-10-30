"use client";

import "./globals.css";
import {Header} from "@/app/components/Header/Header";
import {Footer} from "@/app/components/Footer/Footer";
import {Conversion} from "@/app/components/converting block/conversion";

export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <body>
          {/* RESEARCH <Router>*/}
          {/*поразбираться с children*/}
          <Header />
          <div className="content"> <Conversion/> </div>
          <Footer />

        </body>
        </html>
    );
}
