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
  title: "Portfólio - Desenvolvedor de Jogos & Artista Digital",
  description: "Portfólio moderno apresentando projetos de desenvolvimento de jogos e arte digital",
  generator: "v0.app",
  icons: {
    icon: "/logo-fav.png",
    shortcut: "/logo-fav.png",
    apple: "/logo-fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
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
