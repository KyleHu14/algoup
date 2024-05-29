// Next Imports
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
// const inter = Inter({ subsets: ["latin"] })

// Importing of Components
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

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
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
