import type React from "react"
import type { Metadata } from "next"
import { Iceland, Coda } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"
import "./globals.css"

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceland",
  display: "swap",
})

const coda = Coda({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-coda",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://andersonthums.vercel.app"),
  title: {
    default: "Anderson Tonin Thums - Desenvolvedor de Jogos & Artista Digital",
    template: "%s | Anderson Tonin Thums",
  },
  description:
    "Portfólio profissional de Anderson Tonin Thums: desenvolvedor de jogos, artista 3D e criador de arte com IA. Explore projetos em Unity, Unreal Engine, modelagem 3D e galeria de arte digital.",
  keywords: [
    "desenvolvedor de jogos",
    "game developer",
    "Unity",
    "Unreal Engine",
    "modelagem 3D",
    "3D modeling",
    "Blender",
    "arte IA",
    "AI art",
    "portfólio",
    "Anderson Tonin Thums",
    "game design",
    "programação de jogos",
    "artista digital",
    "C#",
    "C++",
    "Sketchfab",
    "itch.io",
  ],
  authors: [{ name: "Anderson Tonin Thums" }],
  creator: "Anderson Tonin Thums",
  publisher: "Anderson Tonin Thums",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "Anderson Thums Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Game Development, Digital Art, 3D Modeling",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    url: "https://andersonthums.vercel.app",
    siteName: "Anderson Tonin Thums Portfolio",
    title: "Anderson Tonin Thums - Desenvolvedor de Jogos & Artista Digital",
    description:
      "Portfólio profissional apresentando projetos de desenvolvimento de jogos, modelagem 3D e arte digital com IA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anderson Tonin Thums - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Tonin Thums - Desenvolvedor de Jogos & Artista Digital",
    description:
      "Portfólio profissional apresentando projetos de desenvolvimento de jogos, modelagem 3D e arte digital com IA.",
    images: ["/og-image.jpg"],
    creator: "@andersonthums",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-fav.png",
    shortcut: "/logo-fav.png",
    apple: "/logo-fav.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anderson Tonin Thums",
              url: "https://andersonthums.vercel.app",
              image: "/og-image.jpg",
              jobTitle: "Game Developer & Digital Artist",
              description: "Desenvolvedor de jogos, artista 3D e criador de arte com IA",
              sameAs: [
                "https://www.linkedin.com/in/anderson-tonin-thums/",
                "https://github.com/ATThums",
                "https://andersontt.itch.io/",
                "https://sketchfab.com/AnderTThums",
              ],
              knowsAbout: [
                "Game Development",
                "Unity",
                "Unreal Engine",
                "3D Modeling",
                "Blender",
                "AI Art",
                "C#",
                "C++",
                "Digital Art",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Educational Institution",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${coda.variable} ${iceland.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark">
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
