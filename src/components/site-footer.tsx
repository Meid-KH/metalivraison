import { useParams } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import LinkWithLocale from "./link-with-local";

const menuItems = [
	{
		path: `/#tracking`,
		label: {
			ar: "تتبع طلبيتك ",
			fr: "Suivi de Livraison",
		},
	},
	{
		path: `/pricing`,
		label: {
			ar: "أثمنة ميتاليفريزون",
			fr: "Metalivraison tarifs",
		},
	},
	{
		path: `/#contact`,
		label: {
			ar: "تواصل معنا",
			fr: "Contact",
		},
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
	const { lang } = useParams();

	return (
		<footer className="bg-black text-background/80">
			<div className="container">
				<div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-3">
					<div className="col-span-2 space-y-4">
						{/* Logo */}
						{lang === "ar" ? (
							<Icons.logoDarkRtl className="w-64" />
						) : (
							<Icons.logoDark className="w-64" />
						)}
						<p className="text-sm leading-relaxed text-muted">
							{lang === "fr" &&
								"Avec la volonté de notre équipe, votre ambition sera réalisée"}
							{lang === "ar" &&
								"بإرادة فريق ميتاليفريزون أحلامكم ستصبح حقيقة"}
						</p>
					</div>
					<ul className="flex flex-col items-start gap-3.5 text-sm">
						{menuItems?.map((menuItem, index) => (
							<li key={index}>
								<LinkWithLocale
									href={menuItem.path}
									className={cn(
										"block pb-1.5 relative before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:w-8 before:rounded-lg before:bg-primary",
										"transition before:transition-all hover:text-white hover:before:w-full"
									)}
								>
									{lang === "fr" && menuItem.label.fr}
									{lang === "ar" && menuItem.label.ar}
								</LinkWithLocale>
							</li>
						))}
						<li>
							<ul className="flex items-center -ml-3">
								{socialLinks?.map((item, index) => (
									<li key={index}>
										<LinkWithLocale
											href={item.url}
											className="block p-3 transition w-max text-muted hover:text-white hover:-translate-y-0.5"
											target="_blank"
											rel="noopener, noreferrer"
											title={item.label}
										>
											{item.icon}
										</LinkWithLocale>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className="py-4 text-gray-400 border-t border-gray-800 ">
				<div className="container grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<span className="hidden lg:block" />
					<p className="text-xs tracking-wider text-center uppercase sm:text-left lg:text-center">
						{lang === "fr" &&
							`Metalivraison © ${new Date().getFullYear()} — Tous droits résérvés`}
						{lang === "ar" &&
							`ميتاليفريزون © ${new Date().getFullYear()} — جميع الحقوق محفوضة`}
					</p>
					<div className="">
						<LinkWithLocale
							href="/team/login"
							className={cn(
								"flex items-center gap-2 mx-auto sm:ml-auto sm:mr-0 rtl:sm:mr-auto w-max text-xs tracking-wider text-center uppercase group"
							)}
						>
							<span className="underline-offset-4 group-hover:underline group-hover:text-gray-200">
								{lang === "fr" && "Connexion employé"}
								{lang === "ar" && "تسجيل دخول الموظف"}
							</span>
							<span className="p-1.5 bg-gray-400 rounded-full text-dark/80 group-hover:bg-white group-hover:scale-95">
								<Icons.arrowRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
							</span>
						</LinkWithLocale>
					</div>
				</div>
			</div>
		</footer>
	);
}
