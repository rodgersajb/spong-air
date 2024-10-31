import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import MobileNavbar from "./components/mobilenavbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spongair Mechanical",
  description: "Expert HVAC solutions tailored for you.",
  robots: "index, follow",
  keywords: "HVAC, heating, cooling, air conditioning, ventilation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileNavbar />
        {children}
        <Toaster position="bottom-center" />

        <Footer />
      </body>
    </html>
  );
}
