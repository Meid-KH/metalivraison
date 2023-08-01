"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

const ScrollTop = () => {
	const [isScrollTopVisible, setIsScrollTopVisible] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const scrollTopOffset =
				window.pageYOffset || document.documentElement.scrollTop;
			const screenHeight = window.innerHeight;

			// Change state to show/hide Scroll to Top button
			setIsScrollTopVisible(scrollTopOffset >= 800);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={handleScrollToTop}
			className={cn(
				"fixed z-50 w-14 h-14 border rounded-full right-4 lg:right-6 bottom-28 sm:bottom-20 lg:bottom-9 place-items-center",
				"border-foreground backdrop-blur-lg bg-gradient-to-t from-dark bg-black/90 text-primary-foreground duration-100 opacity-90",
				"hover:opacity-100 active:scale-95 hover:border-white",
				isScrollTopVisible ? "grid" : "hidden"
			)}
		>
			<Icons.arrowRight className="w-5 h-5 -rotate-90" />
		</button>
	);
};

export default ScrollTop;
