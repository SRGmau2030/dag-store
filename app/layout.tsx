import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "DAG Tienda de Mascotas - Mascotas Exóticas y Suministros",
  description: "Tu fuente confiable para peces, geckos, serpientes y suministros premium para mascotas",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          <Navigation />
          {children}
          <Footer />
        </CartProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
