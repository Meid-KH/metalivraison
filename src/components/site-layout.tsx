"use client";

import { useParams, usePathname } from "next/navigation";
import Header from "./site-header";
import Footer from "./site-footer";

function SiteLayout({
	children,
	dictionary,
}: {
	children: React.ReactNode;
	dictionary?: any;
}) {
	const path = usePathname();
	const { lang } = useParams();

	return (
		<main className="min-h-screen">
			{path !== `/${lang}/login` &&
			path !== `/${lang}/register` &&
			path !== `/${lang}/team/login` ? (
				<>
					<Header />
					{children}
					<Footer />
				</>
			) : (
				<> {children} </>
			)}
		</main>
	);
}

export default SiteLayout;
