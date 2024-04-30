import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_structure/navbar";
import Footer from "./_structure/footer";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "PawsPal",
  description: "Adopt the pets that are in need.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
