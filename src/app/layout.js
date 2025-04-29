import {  Oswald, Roboto } from "next/font/google";
import "./globals.css";


import { Toaster } from "react-hot-toast";

import MobileNavbar from "./components/mobilenavbar";
import Footer from "./components/footer";



export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: "Spongair Mechanical",
  description: "Expert HVAC solutions tailored for you.",
  robots: "index, follow",
  keywords: "HVAC, heating, cooling, air conditioning, ventilation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <MobileNavbar />
        {children}
        <Toaster position="bottom-center" />

        <Footer />
      </body>
    </html>
  );
}
