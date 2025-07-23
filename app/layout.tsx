import type { Metadata } from "next";
import { Geist, Geist_Mono,Akaya_Telivigala,Concert_One, Poppins, Quicksand } from "next/font/google";
import "./globals.css";


const akaya = Akaya_Telivigala({
  variable: "--font-akaya",
  subsets: ["latin"],
  weight: "400",
});

const concert = Concert_One({
  variable: "--font-concert",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"]
})

const quickSand = Quicksand({
  variable: "--font-quickSand",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"]
})



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
        className={`${akaya.variable} ${concert.variable} ${poppins.variable} ${quickSand.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
