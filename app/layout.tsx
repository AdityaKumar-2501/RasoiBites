import type { Metadata } from "next";
import { Geist, Geist_Mono, Akaya_Telivigala, Concert_One, Poppins, Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const akaya = Akaya_Telivigala({
  variable: "--font-akaya",
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
});

const concert = Concert_One({
  variable: "--font-concert",
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: 'swap',
})

const quickSand = Quicksand({
  variable: "--font-quickSand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rasoibites.com'), // Replace with your actual domain
  title: {
    default: 'RasoiBites - Premium Indian Namkeen & Healthy Snacks Online',
    template: '%s | RasoiBites - Premium Indian Snacks'
  },
  description: 'Discover RasoiBites - India\'s finest premium namkeen, healthy snacks, and traditional Indian munchies. Fresh, authentic flavors delivered to your doorstep. Order crunchy bhujia, spicy mixtures, and artisanal snacks online.',
  keywords: [
    'RasoiBites',
    'namkeen online',
    'Indian snacks',
    'premium namkeen',
    'healthy snacks India',
    'traditional Indian snacks',
    'bhujia online',
    'spicy mixture',
    'crunchy snacks',
    'authentic Indian namkeen',
    'artisanal snacks',
    'regional namkeen',
    'fresh snacks delivery',
    'Indian munchies',
    'savory snacks',
    'homemade namkeen',
    'organic Indian snacks',
    'gluten-free namkeen',
    'festive snacks',
    'Diwali snacks'
  ],
  authors: [{ name: 'RasoiBites Team' }],
  creator: 'RasoiBites',
  publisher: 'RasoiBites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Food & Beverage',
  classification: 'Indian Snacks and Namkeen',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add favicon metadata - PNG only
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rasoibites.com',
    siteName: 'RasoiBites',
    title: 'RasoiBites - Premium Indian Namkeen & Healthy Snacks Online',
    description: 'Discover India\'s finest premium namkeen and healthy snacks. Fresh, authentic flavors delivered to your doorstep.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'RasoiBites - Premium Indian Namkeen and Snacks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RasoiBites - Premium Indian Namkeen & Healthy Snacks',
    description: 'Discover India\'s finest premium namkeen and healthy snacks. Fresh, authentic flavors delivered to your doorstep.',
    images: ['/twitter-image.jpg'], // You'll need to create this
    creator: '@rasoibites', // Replace with your actual Twitter handle
  },
  alternates: {
    canonical: 'https://rasoibites.com',
    languages: {
      'en-IN': 'https://rasoibites.com',
      'hi-IN': 'https://rasoibites.com/hi', // If you plan to add Hindi version
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RasoiBites',
  description: 'Premium Indian namkeen and healthy snacks online store',
  url: 'https://rasoibites.com',
  logo: 'https://rasoibites.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX', // Add your phone number
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.facebook.com/rasoibites',
    'https://www.instagram.com/rasoibites',
    'https://twitter.com/rasoibites'
  ],
  founder: {
    '@type': 'Person',
    name: 'Founder Name' // Replace with actual founder name
  },
  foundingDate: '2024', // Replace with actual founding date
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Your State',
    addressLocality: 'Your City'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${akaya.variable} ${concert.variable} ${poppins.variable} ${quickSand.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google Tag Manager (optional, if you prefer GTM over GA) */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}