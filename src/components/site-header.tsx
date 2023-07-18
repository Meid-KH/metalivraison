import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

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
			<header className="px-4 py-6 bg-gray-100">
				<div className="container">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="block w-56">
							<Icons.logo />
						</Link>

						{/* Menu */}
						<nav>
							<ul className="flex p-4 space-x-10 text-sm">
								{menuItems.map((item, index) => (
									<li key={index}>
										<a
											href={item.url}
											className="font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
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
