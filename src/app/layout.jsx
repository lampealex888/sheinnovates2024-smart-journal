import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Journal",
  description:
    "Smart Journal! Your ally in the quest for a rejuventaed and productive tomorrow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pastel">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link
          rel="icon"
          href="/icon/<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen overflow-hidden">
          <Header />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
