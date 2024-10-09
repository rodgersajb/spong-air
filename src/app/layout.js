import { Inter } from "next/font/google";
import "./globals.css";

import MobileNavbar from "./components/mobilenavbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileNavbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
