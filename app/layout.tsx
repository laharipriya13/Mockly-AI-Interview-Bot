import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Mockly",
  description: "An AI-powered platform for preparing mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
  suppressHydrationWarning
  className={`${monaSans.variable} antialiased pattern`}
>

        {children}
      </body>
    </html>
  );
}
