import { Button, buttonVariants } from "@/components/ui/button";
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
		{ title: "Tarifs", url: "/pricing" },
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
							Livrer avec metalivraison
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
			<header className="sticky top-0 px-4 py-4 bg-gray-200/40 backdrop-blur-xl">
				<div className="container px-0">
					<div className="flex items-center justify-between gap-6">
						{/* Logo */}
						<Link href="/" className="block md:w-56">
							<Icons.logo className="hidden md:block" />
							<Icons.logoSmall className="block w-12 h-12 md:hidden" />
						</Link>

						{/* Menu */}
						<ul className="items-center hidden text-sm md:flex">
							{menuItems.map((item, index) => (
								<li key={index}>
									<a
										href={item.url}
										className={cn(
											"font-medium text-gray-700 block px-5 py-2.5 rounded-full overflow-hidden",
											"relative before:absolute before:inset-0 before:bg-dark before:rounded-full before:-z-10 before:opacity-0 before:scale-50 before:origin-center before:transition-all",
											"hover:text-white hover:before:opacity-100 hover:before:scale-100"
										)}
									>
										{item.title}
									</a>
								</li>
							))}
						</ul>

						{/* CTA Button */}
						<div className="flex items-center flex-shrink-0 gap-3">
							<Link
								href="/register"
								className={cn(
									buttonVariants({}),
									"h-10 px-5 text-sm"
								)}
							>
								Livrer avec metalivraison
							</Link>
							<Link
								href="/login"
								className={cn(
									buttonVariants({ size: "icon" }),
									"w-10 h-10 text-sm"
								)}
								title="Se connecter"
							>
								{/* Se connecter */}
								<Icons.login className="w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
