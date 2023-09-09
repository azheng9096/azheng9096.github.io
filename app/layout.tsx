import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

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
      <body>{children}</body>
    </html>
  );
}
