"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../i18n-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function LocaleSwitcher() {
	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	return (
		<ul className="flex items-center gap-1">
			{i18n.locales.map((locale) => {
				return (
					<li key={locale}>
						<Link
							href={redirectedPathName(locale)}
							className={cn(
								buttonVariants({
									size: "sm",
									variant: "ghost",
								}),
								"flex items-center h-8 gap-2 px-1 py-1 font-semibold rounded-full"
							)}
						>
							{locale !== "ar" && locale !== "fr" && locale}
							{locale === "ar" && (
								<span className="hidden text-xs lg:inline-block font-rtl">
									العربية
								</span>
							)}
							{locale === "fr" && (
								<span className="hidden text-xs lg:inline-block">
									Français
								</span>
							)}
							<span className="w-6 h-6 overflow-hidden rounded-full">
								<Image
									width={50}
									height={50}
									src={`/img/lang/${locale}.png`}
									alt="Arabe"
								/>
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
