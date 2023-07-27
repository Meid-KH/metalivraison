import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname, useParams } from "next/navigation";
import { Locale } from "../i18n-config";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocaleSwitcher from "./locale-switcher";
// import { getDictionary } from "@/get-dictionary";

interface MenuItem {
	title: {
		ar: string;
		fr: string;
	};
	path: string;
}

const Header = () => {
	const pathName = usePathname();
	const { lang } = useParams();
	// const title = async () => await t("fr", "index.hero.title");

	const menuItems: MenuItem[] = [
		{
			title: {
				ar: "تتبع الطلب",
				fr: "Suivi",
			},
			path: "/#tracking",
		},
		{
			title: {
				ar: "الخدمات",
				fr: "Services",
			},
			path: "/#services",
		},
		{
			title: {
				ar: "الأسعار",
				fr: "Tarifs",
			},
			path: "/pricing",
		},
		{
			title: {
				ar: "التواصل معنا",
				fr: "Contact",
			},
			path: "/#contact",
		},
	];
	// console.log(lang);
	// console.log(title);

	return (
		<header className="sticky top-0 z-20">
			<nav className="py-2 text-xs font-medium bg-white">
				<div className="container">
					<div className="flex items-center justify-between gap-6">
						<span className="flex items-center gap-1.5">
							<i className="grid w-5 h-5 rounded-full place-items-center bg-primary text-primary-foreground">
								<Icons.arrowRight
									className={cn(
										"w-3.5 h-3.5 rtl:-scale-x-100"
									)}
								/>
							</i>
							{/* {dictionary.index?.hero?.title} */}
							{lang === "fr" && "Livrer avec metalivraison"}
							{lang === "ar" && "احترف التجارة الإلكترونية الآن"}
						</span>

						<LocaleSwitcher />
					</div>
				</div>
			</nav>

			<nav className="py-4 bg-gray-200/40 backdrop-blur-xl">
				<div className="container">
					<div className="flex items-center justify-between gap-6">
						{/* Logo */}
						<Link href={`/${lang}`} className="block md:w-56">
							{lang === "ar" ? (
								<Icons.logoRtl className="hidden md:block" />
							) : (
								<Icons.logo className="hidden md:block" />
							)}
							<Icons.logoSmall className="block w-12 h-12 md:hidden" />
						</Link>

						{/* Menu */}
						<ul className="items-center hidden gap-1 md:flex">
							{menuItems.map((item, index) => (
								<li key={index}>
									<Link
										href={`/${lang}${item.path}`}
										locale={lang as string}
										className={cn(
											"text-sm rtl:text-base font-medium text-gray-700 block px-4 py-2.5 rounded-full overflow-hidden",
											"relative before:absolute before:inset-0 before:bg-dark before:rounded-full before:-z-10 before:opacity-0 before:scale-50 before:origin-center before:transition-all",
											"hover:text-white hover:before:opacity-100 hover:before:scale-100",
											pathName === item.path &&
												"text-white before:opacity-100 before:scale-100"
										)}
									>
										{lang === "fr" && item.title.fr}
										{lang === "ar" && item.title.ar}
									</Link>
								</li>
							))}
						</ul>

						{/* CTA Button */}
						<div className="flex items-center flex-shrink-0 gap-3">
							<Link
								href={`/${lang}/register`}
								className={cn(
									buttonVariants({}),
									"h-10 px-5 text-sm"
								)}
								locale={lang as string}
							>
								{lang === "fr" && "Livrer avec metalivraison"}
								{lang === "ar" && "تسجل الآن"}
							</Link>
							<Link
								href={`/${lang}/login`}
								locale={lang as string}
								className={cn(
									buttonVariants({ size: "icon" }),
									"w-10 h-10 text-sm"
								)}
								title={
									lang === "fr"
										? "Se connecter"
										: "تسجيل الدخول"
								}
							>
								{/* Se connecter */}
								<Icons.login className="w-5 h-5 rtl:-scale-x-100" />
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
