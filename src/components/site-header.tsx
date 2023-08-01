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
					<div className="flex items-center justify-between gap-6 rtl:flex-row-reverse">
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
						<div className="items-center flex-shrink-0 hidden gap-3 lg:flex">
							<LinkWithLocale
								href={`/register`}
								className={cn(
									buttonVariants({}),
									"h-10 px-5 text-sm"
								)}
							>
								{lang === "fr" && "Livrer avec metalivraison"}
								{lang === "ar" && "تسجل الآن"}
							</LinkWithLocale>
							<LinkWithLocale
								href={`/login`}
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
					<Dialog.Panel className="h-full max-w-xs p-4 text-gray-100 bg-dark">
						<Dialog.Title className="text-xl font-bold text-gray-50">
							{lang === "fr" && "Menu"}
							{lang === "ar" && "القائمة"}
						</Dialog.Title>
						<Dialog.Description className="pt-10">
							<ul className="flex flex-col gap-0.5">
								{menuItems.map((item, index) => (
									<li key={index}>
										<LinkWithLocale
											href={item.path}
											className={cn(
												"font-medium py-3 px-3 inline-flex",
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
							<div className="flex flex-col items-center flex-shrink-0 gap-3 mt-10">
								<LinkWithLocale
									href={`/login`}
									className={cn(
										buttonVariants({ variant: "outline" }),
										"text-sm font-medium w-full"
									)}
								>
									{/* Se connecter */}
									{lang === "fr"
										? "Se connecter"
										: "تسجيل الدخول"}
								</LinkWithLocale>
								<LinkWithLocale
									href={`/register`}
									className={cn(
										buttonVariants({ variant: "outline" }),
										"text-sm font-medium w-full"
									)}
								>
									{lang === "fr" &&
										"Livrer avec metalivraison"}
									{lang === "ar" && "تسجل الآن"}
								</LinkWithLocale>
							</div>
						</Dialog.Description>
					</Dialog.Panel>
				</div>
			</Dialog>
		</Transition>
	);
};
