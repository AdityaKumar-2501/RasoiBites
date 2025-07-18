import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Baloo_Bhai_2, Luckiest_Guy, Bungee } from "next/font/google";
import "./globals.css";


const baloo = Baloo_Bhai_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const luckiest = Luckiest_Guy({
  variable: "--font-luckiest",
  subsets: ["latin"],
  weight: "400",
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rasoi Bites",
  description: 'Premium snacks with amazing flavors. Discover your favorite tastes with Rasoi Bites.',
  keywords: 'snacks, healthy snacks, premium snacks, crunchy snacks, flavored snacks, namkeen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${luckiest.variable} ${bungee.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
