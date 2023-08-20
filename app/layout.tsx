import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | RafMovies",
    default: "RafMovies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navigation />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
