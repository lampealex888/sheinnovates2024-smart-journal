import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Provider from "@/SessionProvider";

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
      <Provider>
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen overflow-hidden justify-between">
            <div>
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </Provider>
    </html>
  );
}
