import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/site-header";
import Footer from "@/components/site-footer";
import ScrollTop from "@/components/site-scrolltop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Metalivraison",
	description: "On—time Satisfaction",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<ScrollTop />
			</body>
		</html>
	);
}
