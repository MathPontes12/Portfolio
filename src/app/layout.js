import { Cutive } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner/Banner";

const cutive = Cutive({
  subsets: ["latin"],
  weight: '400'
});


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={cutive.className}
      >
        <Banner/>
        {children}
      </body>
    </html>
  );
}
