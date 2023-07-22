import ContactForm from "@/components/contact-form";
import { Icons } from "@/components/icons";
import TrackingForm from "@/components/tracking-form";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Hero />
			<Tracking />
			<Services />
			<MoneyTransfer />
			<WhyUs />
			<Contact />
		</>
	);
}

const Hero = () => {
	return (
		<section className="py-24">
			<div className="container">
				<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
					<div className="space-y-6">
						<h1 className="text-6xl font-black tracking-tight lg:text-8xl text-primary">
							On — time Satisfaction
						</h1>
						<p>
							Metalivraison est un service de livraison proposé
							par la société Meta Livraison Express S.A.R.L
							spécialisé dans les solutions logistiques.
							Metalivraison s’adapte aux évolutions de livraison
							au Maroc.
						</p>
						<div className="flex flex-wrap gap-4 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "default" }),
									"w-full sm:w-max"
								)}
							>
								Livrer avec metalivraison
							</Link>
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"w-full sm:w-max"
								)}
							>
								Espace client
							</Link>
						</div>
					</div>
					<div className="w-full">
						<Image
							className="ml-auto"
							src="/img/hero-map.gif"
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
					<h2 className="text-5xl font-extrabold tracking-tight md:text-6xl text-primary">
						Suivi de commande
					</h2>
					<p className="text-dark/70">
						Vous pouvez suivre votre commande en saisissant votre
						numéro de commande
					</p>
				</div>
				<TrackingForm />
				<ul className="flex flex-wrap items-start justify-between gap-4 mt-8 lg:justify-center md:mt-12 lg:mt-24 lg:gap-10 xl:gap-32">
					{/* {[1, 2, 3, 4].map((item, index) => (
              ))} */}
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.truck
							// strokeWidth={1}
							className="w-16 h-16 md:w-20 md:h-20 text-primary"
						/>
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							Colis collecté
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.cogTriple
							// strokeWidth={1}
							className="w-16 h-16 md:w-20 md:h-20 text-primary"
						/>
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							Colis en cours de <br className="" /> traitement
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.clock
							// strokeWidth={0.5}
							className="w-16 h-16 md:w-20 md:h-20 p-3.5 text-primary"
						/>
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							Colis en cours <br className="" /> de livraison
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.check
							strokeWidth={1.15}
							className="w-16 h-16 p-2 md:w-20 md:h-20 text-primary"
						/>
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							Colis livré
						</span>
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
			icon: <Icons.box className="w-20 h-20" />,
			title: "Livraison Express",
			description:
				"Nous assurons la livraison à domicile par tout au Maroc",
		},
		{
			icon: <Icons.deliery className="w-20 h-20" />,
			title: "Ramassage",
			description: "Ramassage a partir d'un seul colis",
		},
		{
			icon: <Icons.warehouse className="w-20 h-20" />,
			title: "Stockage",
			description:
				"Le stockage est gratuit et se fait dans les meilleures conditions.",
		},
		{
			icon: <Icons.packaging className="w-20 h-20" />,
			title: "Emballage",
			description:
				"Nous pouvons emballer les produits liquides et fagiles.",
		},
	];

	return (
		<section id="services" className="py-24">
			<div className="container">
				<div className="space-y-3 text-center">
					<h2 className="text-5xl font-extrabold tracking-tight md:text-6xl text-primary">
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
									"flex flex-col items-center gap-1.5 text-center bg-gray-100 p-4 sm:p-6 xl:p-8 rounded-2xl",
									"border border-gray-200"
								)}
							>
								<span className="text-primary">
									{item.icon}
								</span>
								<h3 className="text-lg font-medium tracking-wide text-primary">
									{item.title}
								</h3>
								<p className="text-sm text-dark/70">
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
							Livrer avec metalivraison
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const MoneyTransfer = () => {
	return (
		<section id="money-transfer" className="pt-12 pb-24">
			<div className="container">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div className="flex flex-col items-start justify-center gap-6">
						<h2 className="text-5xl font-extrabold tracking-tight md:text-6xl text-primary">
							Retour des fonds chaque 48 hour
						</h2>
						<p className="text-foreground/75">
							Virement bancaire de fonds chaque 48 heures ou
							moins.
						</p>
						<Link href="/" className={cn(buttonVariants({}))}>
							Livrer avec metalivraison
						</Link>
					</div>
					<div className="grid__ place-items-center">
						<Image
							className="ml-auto"
							src="/img/money-transfer-fr.png"
							width={600}
							height={400}
							alt="Money transfer"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const WhyUs = () => {
	interface Item {
		icon: React.ReactNode;
		title: string;
		description: string;
	}
	const items: Item[] = [
		{
			icon: <Icons.cod className="w-20 h-20" />,
			title: "Cash on delivery (COD)",
			description:
				"COD est approprié pour gagner la confiance des clients et maintenir la réputation de la marque, en plus de réduire les risques financiers liés au règlement des paiements électroniques.",
		},
		{
			icon: <Icons.location className="w-20 h-20" />,
			title: "Suivez vos commandes en temps réel",
			description:
				"Suivez vos commandes en temps réel où que vous soyez et à n'importe quel moment.",
		},
		{
			icon: <Icons.api className="w-20 h-20" />,
			title: "Connecteurs & API",
			description:
				"Vous pouvez automatiquement envoyer vos colis en toute simplicité et confort. Des connecteurs à votre disposition pour toutes les plateformes Ecommerce",
		},
		{
			icon: <Icons.callcenter className="w-20 h-20" />,
			title: "Centre relation client",
			description:
				"Nous vous assurons un support technique tout au long de la semaine pour vous permettre de développer votre projet.",
		},
	];

	return (
		<section id="why-us" className="py-24 bg-gray-100">
			<div className="container">
				<div className="space-y-3 text-center">
					<h2 className="text-5xl font-extrabold tracking-tight md:text-6xl text-primary">
						Pourquoi metalivraison ?
					</h2>
				</div>
				<div className="mt-14">
					<ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{items.map((item, index) => (
							<li
								key={index}
								className={cn(
									"flex items-start gap-4 bg-white p-4 sm:p-6 xl:p-8 rounded-2xl",
									"border border-gray-200"
								)}
							>
								<span className="text-primary">
									{item.icon}
								</span>
								<div className="space-y-1.5">
									<h3 className="text-lg font-medium tracking-wide text-primary">
										{item.title}
									</h3>
									<p className="text-sm leading-normal text-dark/70">
										{item.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

const Contact = () => {
	const ContactDetails = [
		{
			title: "Support",
			description: "Metalivraison support 24/7",
			icon: <Icons.headphones className="w-8 h-8" />,
			content: "07 08 20 21 21",
		},
		{
			title: "Adresse",
			description: "Trouvez-nous",
			icon: <Icons.mapPin className="w-8 h-8" />,
			content: "N°102 LOT A DHER EL MEHREZ FES",
		},
		{
			title: "Rencontre nous",
			description: "Heures disponibles pour se réunir",
			icon: <Icons.clock3 className="w-8 h-8" />,
			content: "9:00 AM ⸺ 8:00 PM",
		},
	];
	return (
		<section id="contact" className="pt-24">
			<div className="container">
				<div className="space-y-3 text-center">
					<h2 className="text-5xl font-extrabold tracking-tight md:text-6xl text-primary">
						Besoin d&apos;aide 24/7
					</h2>
					<p className="text-foreground/75">
						Renseignez vos informations et nous prendrons contact
						avec vous.
					</p>
				</div>
				<div className="mt-16">
					<div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3___">
						<Image
							className="mx-auto"
							src="/img/contact.png"
							width={400}
							height={400}
							alt="Contact us"
						/>
						<ContactForm className="xl:col-span-2__" />
					</div>
				</div>
			</div>
			<div className="py-16 mt-16 bg-gray-100">
				<div className="container">
					<ul className="grid gap-6 grid-col-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
						{/* <li className="p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white flex flex-col gap-1.5 text-center">
							<span className="grid p-3 mx-auto text-white rounded-full shadow-md shadow-primary/40 place-items-center bg-primary">
								<Icons.headphones className="w-8 h-8" />
							</span>
							<h3 className="pt-3 text-xl font-semibold text-dark/90">
								Support
							</h3>
							<p className="text-foreground/75">
								Metalivraison support 24/7
							</p>
						</li>
						<li className="p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white flex flex-col gap-1.5 text-center">
							<span className="grid p-3 mx-auto text-white rounded-full shadow-md shadow-primary/40 place-items-center bg-primary">
								<Icons.mapPin className="w-8 h-8" />
							</span>
							<h3 className="pt-3 text-xl font-semibold text-dark/90">
								Adresse
							</h3>
							<p className="text-foreground/75">Trouvez-nous</p>
						</li> */}
						{ContactDetails?.map((item, index) => (
							<li
								key={index}
								className="relative group cursor-pointer p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white flex flex-col gap-1.5 text-center"
							>
								<span className="grid p-3 mx-auto text-white rounded-full shadow-md shadow-primary/40 place-items-center bg-primary">
									{item.icon}
								</span>
								<h3 className="pt-3 text-xl font-semibold text-dark/90">
									{item?.title}
								</h3>
								<p className="text-foreground/75">
									{item?.description}
								</p>
								<span
									className={cn(
										"absolute w-24 h-1.5 -translate-x-1/2 rounded-lg bottom-1.5 left-1/2 bg-primary transition-[width,height,bottom] origin-center",
										"group-hover:h-full group-hover:w-full group-hover:bottom-0"
									)}
								/>
								<div
									className={cn(
										"absolute inset-0 text-white grid place-items-center text-center text-lg font-medium opacity-0 -z-0 translate-y-3 transition duration-300",
										"group-hover:opacity-100 group-hover:translate-y-0"
									)}
								>
									<div className="space-y-3">
										<span className="grid p-3 mx-auto bg-white rounded-full shadow-md w-max text-primary shadow-primary/40 place-items-center">
											{item.icon}
										</span>
										<p>{item.content}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
