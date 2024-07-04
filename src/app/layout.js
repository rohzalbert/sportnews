import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import styles from "@/styles/Layout.module.css"
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Next.js",
  description: "Creating next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
