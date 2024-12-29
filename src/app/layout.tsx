// Next Imports

import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})
import "./globals.css"

// Importing of Components
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
    title: {
        template: "%s | Algoup",
        default: "Algoup",
    },
    metadataBase: new URL(
        process.env.VERCEL_PROJECT_PRODUCTION_URL || // Use production URL if available
            process.env.VERCEL_BRANCH_URL || // Use branch URL if in preview mode
            process.env.VERCEL_URL || // Fallback to the default Vercel URL
            `http://localhost:${process.env.PORT || 3000}`, // Fallback to local development URL
    ),
    openGraph: {
        title: "Algoup",
        images: ["/logo-full.png"],
        siteName: "Algoup",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
