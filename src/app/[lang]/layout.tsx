import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/site-header";
import Footer from "@/components/site-footer";
import ScrollTop from "@/components/site-scrolltop";

import { usePathname } from "next/navigation";
import SiteLayout from "@/components/site-layout";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import { i18n } from "../../i18n-config";

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
	title: "Metalivraison",
	description: "On—time Satisfaction",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/icon.png",
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
			<body className={cn(inter.className)}>
				<SiteLayout>{children}</SiteLayout>
				<ScrollTop />
			</body>
		</html>
	);
}
