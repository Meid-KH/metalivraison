import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItem {
	title: string;
	url: string;
}

const Header = () => {
	const menuItems: MenuItem[] = [
		{ title: "Suivi", url: "/#tracking" },
		{ title: "Services", url: "/#services" },
		{ title: "Tarifs", url: "/tarifs" },
		{ title: "Contact", url: "/#contact" },
	];

	return (
		<>
			<nav className="p-1 text-xs font-medium bg-white">
				<div className="container">
					<div className="flex items-center justify-between gap-6">
						<span className="flex items-center gap-1.5">
							<i className="grid w-6 h-6 rounded-full place-items-center bg-primary text-primary-foreground">
								<Icons.arrowRight className="w-4 h-4" />
							</i>
							Livré avec metalivraison
						</span>
						<Button
							variant="ghost"
							size="sm"
							className="flex items-center gap-2 px-3 py-1 -mr-3 font-semibold rounded-full"
						>
							العربية
							<span className="w-6 h-6 overflow-hidden rounded-full">
								<Image
									width={50}
									height={50}
									src="/img/lang/ar.png"
									alt="Arabe"
								/>
							</span>
						</Button>
					</div>
				</div>
			</nav>
			<header className="sticky top-0 px-4 py-6 bg-gray-200/40 backdrop-blur-xl">
				<div className="container">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="block w-56">
							<Icons.logo />
						</Link>

						{/* Menu */}
						<nav>
							<ul className="flex text-sm">
								{menuItems.map((item, index) => (
									<li key={index}>
										<a
											href={item.url}
											className={cn(
												"font-medium text-gray-700 inline-block px-5 py-2.5 rounded-full overflow-hidden",
												"relative before:absolute before:inset-0 before:bg-dark before:rounded-full before:-z-10 before:opacity-0 before:scale-50 before:origin-center before:transition-all",
												"hover:text-white hover:before:opacity-100 hover:before:scale-100"
											)}
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						</nav>

						{/* CTA Button */}
						<div className="flex items-center gap-3">
							<Button>Livré avec Metalivraison</Button>
							<Button size="icon">
								<Icons.login className="w-5 h-5" />
							</Button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
