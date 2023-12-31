import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/utils/SmoothScroll";
import Navbar from "@/components/Navbar.module";
import Footer from "@/components/Footer.module";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: ".Reciper",
  description: "The Goldiest Recipe",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
