import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navigation/navbar";
import { Zen_Maru_Gothic } from "next/font/google";
import logo from "./images/psa-logo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Zen_Maru_Gothic({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Palestine Solidarity Archive",
  description: "todo here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex min-h-screen flex-col justify-center pt-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
          <Image className="logo" src={logo} alt={"logo"} />
          <NavBar /> {/* could add items-center class to center everything? */}
          {children}
        </main>
      </body>
    </html>
  );
}
