import { Inter } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "TaubeTech | Premium Softwareentwicklung, KI & Cloud-Systeme",
  description:
    "Taube Technology GmbH aus Stuttgart entwickelt zukunftsfähige Software, intelligente KI-Automatisierungen und skalierbare Cloud-Systeme für KMU und Startups.",
  keywords:
    "TaubeTech, Softwareentwicklung Stuttgart, KI-Automatisierung, Cloud Software, E-Commerce, ShopBuilder, Cybersecurity, Team-Erweiterung, IT-Consulting",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TaubeTech | Premium Softwareentwicklung, KI & Cloud-Systeme",
    description:
      "Zukunftsfähige Software. KI-Power. Kein Kompromiss. Wir automatisieren Geschäftsprozesse mit KI, bauen Cloud-Systeme und stellen hybride Entwicklerteams.",
    url: "https://www.taubetech.de",
    siteName: "TaubeTech",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Taube Technology GmbH",
  "alternateName": "TaubeTech",
  "url": "https://www.taubetech.de",
  "logo": "https://www.taubetech.de/logo.png",
  "image": "https://www.taubetech.de/office-stuttgart.jpg",
  "description":
    "Zukunftsfähige Software, KI-Power & Cloud-Systeme aus Stuttgart. DSGVO-konforme Enterprise-Sicherheit für Startups und KMUs.",
  "telephone": "+4917634953008",
  "email": "info@taubetech.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wegaweg 6",
    "addressLocality": "Stuttgart",
    "postalCode": "70565",
    "addressCountry": "DE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7214,
    "longitude": 9.1235,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "sameAs": [
    "https://www.linkedin.com/company/taubetech",
    "https://www.facebook.com/taubetech",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0F1E] text-[#F8FAFC]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
