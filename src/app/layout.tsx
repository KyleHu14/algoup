// Next Imports
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})
import "./globals.css"

// Importing of Components
import Navbar from "@/components/General/Navbar"
import Footer from "@/components/General/Footer"

export const metadata: Metadata = {
    title: "Algoup",
    description: "Algoup company website",
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
