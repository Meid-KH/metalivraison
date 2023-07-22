"use client";

import { usePathname } from "next/navigation";
import Header from "./site-header";
import Footer from "./site-footer";

function SiteLayout({ children }: { children: React.ReactNode }) {
	const path = usePathname();

	return (
		<main className="min-h-screen">
			{path !== "/login" &&
			path !== "/register" &&
			path !== "/team/login" ? (
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
