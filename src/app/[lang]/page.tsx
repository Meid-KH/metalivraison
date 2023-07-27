import ContactForm from "@/components/contact-form";
import { Icons } from "@/components/icons";
import TrackingForm from "@/components/tracking-form";
import { Button, buttonVariants } from "@/components/ui/button";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/heading";

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	return (
		<>
			{/* <p>Current locale: {lang}</p> */}
			{/* <p>{dict.index?.hero?.title}</p> */}
			<Hero lang={lang} />
			<Tracking lang={lang} />
			<Services lang={lang} />
			<MoneyTransfer lang={lang} />
			<WhyUs lang={lang} />
			<Contact lang={lang} />
		</>
	);
}

const Hero = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);

	return (
		<section id="hero" className="py-24">
			<div className="container">
				<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
					<div className="space-y-6">
						<Heading variant="h1">
							{/* On — time Satisfaction */}
							{dict.index?.hero?.title}
						</Heading>
						<p>
							{/* Metalivraison est un service de livraison proposé
							par la société Meta Livraison Express S.A.R.L
							spécialisé dans les solutions logistiques.
							Metalivraison s’adapte aux évolutions de livraison
							au Maroc. */}
							{dict.index?.hero?.paragraph}
						</p>
						<div className="flex flex-wrap gap-4 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "default" }),
									"w-full sm:w-max"
								)}
							>
								{dict.global?.["Deliver with Metalivraison"]}
							</Link>
							<Link
								href="/"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"w-full sm:w-max"
								)}
							>
								{dict.global?.["Customer account"]}
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

const Tracking = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);
	const formDict = {
		cta: dict?.global?.Track,
		placeholder: dict?.global?.["tracking number"],
	};
	return (
		<section id="tracking" className="py-24 bg-gray-100">
			<div className="container">
				<div className="space-y-6 text-center">
					<Heading>{dict.index?.tracking?.title}</Heading>
					<p className="text-dark/70">
						{dict.index?.tracking?.paragraph}
						{/* Vous pouvez suivre votre commande en saisissant votre
						numéro de commande */}
					</p>
				</div>
				<TrackingForm dictionary={formDict} />
				<ul className="flex flex-wrap items-start justify-between gap-4 mt-8 lg:justify-center md:mt-12 lg:mt-24 lg:gap-10 xl:gap-32">
					{/* {[1, 2, 3, 4].map((item, index) => (
              ))} */}
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.truck className="w-16 h-16 md:w-20 md:h-20 text-primary rtl:-scale-x-100" />
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							{/* Colis collecté */}
							{dict.index?.tracking?.["Package collected"]}
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.cogTriple className="w-16 h-16 md:w-20 md:h-20 text-primary" />
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							{dict.index?.tracking?.["Package being processed"]}
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.clock className="w-16 h-16 md:w-20 md:h-20 p-3.5 text-primary" />
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							{dict.index?.tracking?.["Package on delivery"]}
						</span>
					</li>
					<li className="flex flex-col gap-1.5 items-center text-center">
						<Icons.check
							strokeWidth={1.15}
							className="w-16 h-16 p-2 md:w-20 md:h-20 text-primary"
						/>
						<span className="text-sm font-medium lfirst-letter:eading-snug md:text-base">
							{dict.index?.tracking?.["Package delivered"]}
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

const Services = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);
	interface Item {
		icon: React.ReactNode;
		title: string;
		description: string;
	}

	const items: Item[] = [
		{
			icon: <Icons.box className="w-20 h-20" />,
			title: dict.index?.services?.delivery?.title,
			description: dict.index?.services?.delivery?.description,
		},
		{
			icon: <Icons.delivery className="w-20 h-20 rtl:-scale-x-100" />,
			title: dict.index?.services?.pickup?.title,
			description: dict.index?.services?.pickup?.description,
		},
		{
			icon: <Icons.warehouse className="w-20 h-20" />,
			title: dict.index?.services?.storage?.title,
			description: dict.index?.services?.storage?.description,
		},
		{
			icon: <Icons.packaging className="w-20 h-20" />,
			title: dict.index?.services?.packaging?.title,
			description: dict.index?.services?.packaging?.description,
		},
	];

	return (
		<section id="services" className="py-24">
			<div className="container">
				<div className="space-y-3 text-center">
					<Heading>
						{dict.index?.services?.title}
						{/* Découvrez nos services */}
					</Heading>
					<p className="text-dark/70">
						{dict.index?.services?.paragraph}
						{/* Lorem ipsum dolor sit amet consectetur adipisicing
						elitquisquam rerum magnam, quidem. <br className="" />{" "}
						Natus facilis omnis non nemo officia. */}
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
								<h3 className="text-lg font-medium tracking-wide text-primary rtl:text-xl rtl:font-semibold">
									{item.title}
								</h3>
								<p className="text-sm text-dark/70 rtl:text-base rtl:leading-7">
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
							{dict.global?.["Deliver with Metalivraison"]}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const MoneyTransfer = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);

	return (
		<section id="money-transfer" className="pt-12 pb-24">
			<div className="container">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div className="flex flex-col items-start justify-center gap-6">
						<Heading>
							{/* Retour des fonds chaque 48 hour */}
							{dict.index?.["money-transfer"]?.title}
						</Heading>
						<p className="text-foreground/75">
							{dict.index?.["money-transfer"]?.paragraph}
							{/* Virement bancaire de fonds chaque 48 heures ou moins.*/}
						</p>
						<Link href="/" className={cn(buttonVariants({}))}>
							{dict.global?.["Deliver with Metalivraison"]}
						</Link>
					</div>
					<div className="grid__ place-items-center">
						<Image
							className="ml-auto"
							src={`/img/money-transfer-${lang}.png`}
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

const WhyUs = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);
	interface Item {
		icon: React.ReactNode;
		title: string;
		description: string;
	}
	const items: Item[] = [
		{
			icon: <Icons.cod className="w-20 h-20" />,
			title: dict.index?.["why-us"]?.cod?.title,
			description: dict.index?.["why-us"]?.cod?.description,
		},
		{
			icon: <Icons.location className="w-20 h-20" />,
			title: dict.index?.["why-us"]?.tracking?.title,
			description: dict.index?.["why-us"]?.tracking?.description,
		},
		{
			icon: <Icons.api className="w-20 h-20" />,
			title: dict.index?.["why-us"]?.api?.title,
			description: dict.index?.["why-us"]?.api?.description,
		},
		{
			icon: <Icons.callcenter className="w-20 h-20" />,
			title: dict.index?.["why-us"]?.callcentre?.title,
			description: dict.index?.["why-us"]?.callcentre?.description,
		},
	];

	return (
		<section id="why-us" className="py-24 bg-gray-100">
			<div className="container">
				<div className="space-y-3 text-center">
					<Heading>{dict.index?.["why-us"]?.title}</Heading>
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
									<h3 className="text-lg font-medium tracking-wide rtl:font-semibold text-primary">
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

const Contact = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);

	const ContactDetails = [
		{
			title: dict.index?.contact?.support?.title,
			description: dict.index?.contact?.support?.description,
			icon: <Icons.headphones className="w-8 h-8" />,
			content: dict.index?.contact?.support?.content,
		},
		{
			title: dict.index?.contact?.address?.title,
			description: dict.index?.contact?.address?.description,
			icon: <Icons.mapPin className="w-8 h-8" />,
			content: dict.index?.contact?.address?.content,
		},
		{
			title: dict.index?.contact?.time?.title,
			description: dict.index?.contact?.time?.description,
			icon: <Icons.clock3 className="w-8 h-8" />,
			content: dict.index?.contact?.time?.content,
		},
	];
	return (
		<section id="contact" className="pt-24">
			<div className="container">
				<div className="space-y-3 text-center">
					<Heading>
						{/* Besoin d&apos;aide 24/7 */}
						{dict.index?.contact?.title}
					</Heading>
					<p className="text-foreground/75">
						{dict.index?.contact?.paragraph}
						{/* Renseignez vos informations et nous prendrons contact
						avec vous. */}
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
						<ContactForm
							className="xl:col-span-2__"
							dictionary={dict.forms}
						/>
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
										<p
											className="font-body"
											style={{ direction: "ltr" }}
										>
											{item.content}
										</p>
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
