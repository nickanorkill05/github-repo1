import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="flex justify-center static">
      <body className={inter.className} >
        <nav >
          <h1>
            Login test
          </h1>
          {children}
        </nav>
      </body>
    </html>
  );
}
