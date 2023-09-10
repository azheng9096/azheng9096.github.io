import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const raleway = Raleway({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anna Zheng's Portfolio",
  description:
    "Interactive and responsive portfolio website to showcase projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
