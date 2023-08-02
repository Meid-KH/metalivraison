"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname, useParams } from "next/navigation";
import { Locale } from "../i18n-config";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocaleSwitcher from "./locale-switcher";
import LinkWithLocale from "./link-with-local";
// import { getDictionary } from "@/get-dictionary";

interface MenuItem {
	title: {
		ar: string;
		fr: string;
	};
	path: string;
}

const menuItems: MenuItem[] = [
	{
		title: {
			ar: "تتبع الطلب",
			fr: "Suivi",
		},
		path: "/tracking",
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

const Header = () => {
	const pathName = usePathname();
	const { lang } = useParams();
	const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(true);
	};

	console.log(isMobileMenuOpen);

	return (
		<>
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

			<header className="sticky top-0 z-20 py-3 lg:py-4 bg-gray-200/40 backdrop-blur-xl">
				<div className="container">
					<div className="flex items-center justify-between gap-6 rtl:flex-row-reverse lg:rtl:flex-row">
						{/* Logo */}
						<LinkWithLocale href={`/`} className="block md:w-56">
							{lang === "ar" ? (
								<Icons.logoRtl className="hidden md:block" />
							) : (
								<Icons.logo className="hidden md:block" />
							)}
							<Icons.logoSmall className="block w-12 h-12 md:hidden" />
						</LinkWithLocale>

						{/* Menu */}
						<ul className="items-center hidden gap-1 lg:flex">
							{menuItems.map((item, index) => (
								<li key={index}>
									<LinkWithLocale
										href={item.path}
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
									</LinkWithLocale>
								</li>
							))}
						</ul>

						{/* CTA Button */}
						<div className="items-center flex-shrink-0 hidden gap-1.5 lg:flex">
							<LinkWithLocale
								href={`/login`}
								className={cn(
									buttonVariants({}),
									"h-10 text-sm font-medium px-4 bg-transparent underline underline-offset-4 text-dark duration-150 hover:text-primary-foreground hover:no-underline"
								)}
								title={
									lang === "fr"
										? "Se connecter"
										: "تسجيل الدخول"
								}
							>
								{/* Se connecter */}
								{/* <Icons.login className="w-5 h-5 rtl:-scale-x-100" /> */}
								{lang === "fr"
									? "Se connecter"
									: "تسجيل الدخول"}
							</LinkWithLocale>
							<LinkWithLocale
								href={`/register`}
								className={cn(
									buttonVariants({}),
									"h-10 px-4 text-sm"
								)}
							>
								{lang === "fr" && "Enregistrer"}
								{lang === "ar" && "تسجل الآن"}
							</LinkWithLocale>
						</div>

						{/* Menu trigger */}
						<Button
							onClick={toggleMobileMenu}
							variant="outline"
							size="icon"
							className="grid border-0 lg:hidden border-dark text-dark drop-shadow-none hover:drop-shadow-none"
						>
							<Icons.menu className="w-9 h-9" strokeWidth={1.5} />
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<MobileMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setMobileMenuOpen(false)}
					/>
				)}
			</header>
		</>
	);
};

export default Header;

const MobileMenu: React.FC<{
	isOpen: boolean;
	onClose: () => void;
}> = ({ isOpen, onClose }) => {
	const pathName = usePathname();
	const { lang } = useParams();

	return (
		<Transition
			show={isOpen}
			enter="transition duration-100 ease-out"
			enterFrom="transform scale-95 opacity-0"
			enterTo="transform scale-100 opacity-100"
			leave="transition duration-75 ease-out"
			leaveFrom="transform scale-100 opacity-100"
			leaveTo="transform scale-95 opacity-0"
			as={Fragment}
		>
			<Dialog
				// open={isOpen}
				onClose={() => onClose()}
				className="relative z-50"
			>
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				{/* <div
					className="fixed inset-0 bg-black/30"
					aria-hidden="true"
					onClick={() => onClose()}
				/> */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/30 backdrop-blur-lg" />
				</Transition.Child>

				{/* Full-screen container to center the panel */}

				<div className="fixed inset-0 flex flex-col">
					{/* The actual dialog panel  */}
					<Dialog.Panel className="h-full max-w-xs min-h-screen p-4 overflow-y-auto text-gray-100 bg-dark/95 backdrop-blur">
						<Button
							onClick={() => onClose()}
							size="icon"
							className="absolute grid bg-black border border-white/20 right-4 rtl:right-auto rtl:left-4 top-4 w-9 h-9 place-items-center"
						>
							<Icons.close className="w-5 h-5" />
						</Button>
						<div className="mt-10 text-2xl font-bold tracking-tight rtl:tracking-normal text-gray-50">
							{lang === "fr" && "Menu"}
							{lang === "ar" && "القائمة"}
						</div>
						<Dialog.Description className="">
							<ul className="flex flex-col mt-2.5 bg-black/90 backdrop-blur-lg rounded-xl">
								{menuItems.map((item, index) => (
									<li
										key={index}
										className="[&:not(:last-child)]:border-b border-white/10"
									>
										<LinkWithLocale
											href={item.path}
											onClick={() => onClose()}
											className={cn(
												"font-medium___ py-3 px-4 flex gap-3 justify-between items-center",
												pathName === item.path && ""
											)}
										>
											{lang === "fr" && item.title.fr}
											{lang === "ar" && item.title.ar}
											<Icons.arrowRight className="w-4 h-4 rtl:-scale-100 text-white/60" />
										</LinkWithLocale>
									</li>
								))}
							</ul>

							<div className="mt-10 text-2xl font-bold tracking-tight rtl:tracking-normal text-gray-50">
								{lang === "fr" && "Livrer avec nous"}
								{lang === "ar" && "إبدأ التوصيل معنا"}
							</div>
							{/* CTA Button */}
							<ul className="flex flex-col mt-2.5 bg-black/90 backdrop-blur-lg rounded-xl">
								<li className="[&:not(:last-child)]:border-b border-white/10">
									<LinkWithLocale
										href={`/login`}
										onClick={() => onClose()}
										className={cn(
											"font-medium___ py-3 px-4 flex gap-3 justify-between items-center",
											""
										)}
									>
										{/* Se connecter */}
										{lang === "fr"
											? "Se connecter"
											: "تسجيل الدخول"}
										<Icons.arrowRight className="w-4 h-4 rtl:-scale-100 text-white/60" />
									</LinkWithLocale>
								</li>

								<li className="[&:not(:last-child)]:border-b border-white/10">
									<LinkWithLocale
										href={`/register`}
										onClick={() => onClose()}
										className={cn(
											"font-medium___ py-3 px-4 flex gap-3 justify-between items-center"
										)}
									>
										{lang === "fr" && "Enregistrez-vous"}
										{lang === "ar" && "تسجل الآن"}
										<Icons.arrowRight className="w-4 h-4 rtl:-scale-100 text-white/60" />
									</LinkWithLocale>
								</li>
							</ul>
						</Dialog.Description>
					</Dialog.Panel>
				</div>
			</Dialog>
		</Transition>
	);
};
