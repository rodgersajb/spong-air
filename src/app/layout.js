import { Inter, Merriweather, Raleway, Bebas_Neue, Roboto_Slab, Playfair_Display, Oswald, Roboto } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import MobileNavbar from "./components/mobilenavbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ weight: '400', subsets: ["latin"] });
const raleway = Raleway({ weight: '400', subsets: ["latin"] });
const bebas_neue = Bebas_Neue({ weight: '400', subsets: ["latin"] });
const roboto_slab = Roboto_Slab({ weight: '400', subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: '400', subsets: ["latin"] });
// const oswald = Oswald({ weight: '400', subsets: ["latin"] });

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
