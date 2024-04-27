import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_structure/navbar";
import Footer from "./_structure/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "PawsPal",
  description: "Adopt the pets that are in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
