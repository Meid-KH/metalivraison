import { Icons } from "@/components/icons";
import TrackingForm from "@/components/tracking-form";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<Tracking />
			<Services />
		</main>
	);
}

const Hero = () => {
	return (
		<section className="py-24">
			<div className="container">
				<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
					<div className="space-y-6">
						<h1 className="font-black tracking-tight text-8xl text-primary">
							On — time Satisfaction
						</h1>
						<p>
							Metalivraison est un service de livraison proposé
							par la société Meta Livraison Express S.A.R.L
							spécialisé dans les solutions logistiques.
							Metalivraison s’adapte aux évolutions de livraison
							au Maroc.
						</p>
						<div className="flex space-x-4">
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "default" })
								)}
							>
								Livré avec Metalivraison
							</Link>
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "outline" })
								)}
							>
								Espace client
							</Link>
						</div>
					</div>
					<div className="w-full">
						<Image
							className="ml-auto"
							src="/img/intro.png"
							alt="Intro Image"
							width={600}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const Tracking = () => {
	return (
		<section id="tracking" className="py-24 bg-gray-100">
			<div className="container">
				<div className="space-y-2 text-center">
					<h2 className="text-6xl font-black tracking-tight text-primary">
						Suivi de commande
					</h2>
					<p className="text-dark/70">
						Vous pouvez suivre votre commande en saisissant votre
						numéro de commande
					</p>
				</div>
				<TrackingForm />
				<ul className="flex items-start justify-center gap-32 mt-24">
					{/* {[1, 2, 3, 4].map((item, index) => (
              ))} */}
					<li className="flex flex-col gap-2.5 items-center text-center">
						<Icons.truck className="w-14 h-14 text-primary" />
						<span className="font-semibold">Colis collecté</span>
					</li>
					<li className="flex flex-col gap-2.5 items-center text-center">
						<Icons.cog className="w-14 h-14 text-primary" />
						<span className="font-semibold">
							Colis en cours de <br className="" /> traitement
						</span>
					</li>
					<li className="flex flex-col gap-2.5 items-center text-center">
						<Icons.bike className="w-14 h-14 text-primary" />
						<span className="font-semibold">
							Colis en cours <br className="" /> de livraison
						</span>
					</li>
					<li className="flex flex-col gap-2.5 items-center text-center">
						<Icons.thumb className="w-14 h-14 text-primary" />
						<span className="font-semibold">Colis livré</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

const Services = () => {
	interface Item {
		icon: React.ReactNode;
		title: string;
		description: string;
	}

	const items: Item[] = [
		{
			icon: <Icons.check className="w-12 h-12" />,
			title: "Livraison Express",
			description:
				"Nous assurons la livraison à domicile par tout au Maroc",
		},
		{
			icon: <Icons.check className="w-12 h-12" />,
			title: "Ramassage",
			description:
				"Nous assurons la livraison à domicile par tout au Maroc",
		},
		{
			icon: <Icons.check className="w-12 h-12" />,
			title: "Stockage",
			description:
				"Nous assurons la livraison à domicile par tout au Maroc",
		},
		{
			icon: <Icons.check className="w-12 h-12" />,
			title: "Emballage",
			description:
				"Nous pouvons emballer les produits liquides et fagiles.  ",
		},
	];

	return (
		<section id="services" className="py-24">
			<div className="container">
				<div className="space-y-3 text-center">
					<h2 className="text-6xl font-black tracking-tight text-primary">
						Découvrez nos services
					</h2>
					<p className="text-dark/70">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elitquisquam rerum magnam, quidem. <br className="" />{" "}
						Natus facilis omnis non nemo officia.
					</p>
				</div>
				<div className="mt-14">
					<ul className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{items.map((item, index) => (
							<li
								key={index}
								className={cn(
									"flex flex-col items-center gap-3 text-center bg-gray-100 sm:p-6 xl:p-8 rounded-2xl",
									"border border-gray-200"
								)}
							>
								<span className="text-primary">
									{item.icon}
								</span>
								<h3 className="text-xl font-bold text-primary">
									{item.title}
								</h3>
								<p className="text-dark/70">
									{item.description}
								</p>
							</li>
						))}
					</ul>
					<div className="flex justify-center mt-16">
						<Link
							href="/"
							className={cn(
								buttonVariants({ variant: "default" })
							)}
						>
							Livré avec Metalivraison
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
