import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const menuItems = [
	{
		path: "/#tracking",
		label: "Suivi de Livraison",
	},
	{
		path: "/tarifs",
		label: "Metalivraison tarifs",
	},
	{
		path: "/#contact",
		label: "Contact",
	},
];
const socialLinks = [
	{
		url: "https://www.facebook.com",
		icon: <Icons.facebook strokeWidth={1.5} className="w-5 h-5" />,
		label: "Facebook",
	},
	{
		url: "https://www.youtube.com",
		icon: <Icons.youtube strokeWidth={1.5} className="w-5 h-5" />,
		label: "Youtube",
	},
	{
		url: "https://www.instagram.com",
		icon: <Icons.instagram strokeWidth={1.5} className="w-5 h-5" />,
		label: "Instagram",
	},
	{
		url: "https://www.twitter.com",
		icon: <Icons.twitter strokeWidth={1.5} className="w-5 h-5" />,
		label: "Twitter",
	},
];

export default function Footer() {
	return (
		<footer className="bg-black text-background/80">
			<div className="container">
				<div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-3">
					<div className="col-span-2 space-y-4">
						{/* Logo */}
						<Icons.logoDark className="w-64" />
						<p className="text-sm leading-relaxed text-muted">
							Avec la volonté de notre équipe, <br className="" />{" "}
							votre ambition sera réalisée
						</p>
					</div>
					<ul className="flex flex-col items-start gap-3.5 text-sm">
						{menuItems?.map((menuItem, index) => (
							<li key={index}>
								<Link
									href={menuItem.path}
									className={cn(
										"block pb-1.5 relative before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:w-8 before:rounded-lg before:bg-primary",
										"transition before:transition-all hover:text-white hover:before:w-full"
									)}
								>
									{menuItem.label}
								</Link>
							</li>
						))}
						<li>
							<ul className="flex items-center -ml-3">
								{socialLinks?.map((item, index) => (
									<li key={index}>
										<Link
											href={item.url}
											className="block p-3 transition w-max text-muted hover:text-white hover:-translate-y-0.5"
											target="_blank"
											rel="noopener, noreferrer"
											title={item.label}
										>
											{item.icon}
										</Link>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className="py-6 border-t border-gray-800">
				<div className="container">
					<p className="text-xs tracking-wider text-center text-gray-400 uppercase">
						Metalivraison © 2023 — Tous droits résérvés
					</p>
				</div>
			</div>
		</footer>
	);
}
