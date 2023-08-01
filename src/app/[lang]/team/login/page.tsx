import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import LoginForm from "./login-form";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LinkWithLocale from "@/components/link-with-local";

const TeamLoginPage: React.FC<{ params: { lang: Locale } }> = async ({
	params: { lang },
}) => {
	const dict = await getDictionary(lang);
	const { forms, validation } = dict;
	const allDict = { forms, validation };

	return (
		<main className="relative">
			<LinkWithLocale
				href="/"
				className={cn(
					buttonVariants({ size: "icon", variant: "outline" }),
					"absolute z-10 grid w-20 h-20 top-6 right-6 place-items-center bg-gray-100",
					"transition group hover:bg-white hover:scale-90 hover:drop-shadow"
				)}
			>
				<Icons.close className="group-hover:scale-125" />
			</LinkWithLocale>
			<div className="grid h-screen overflow-hidden sm:grid-cols-2">
				{/* Column 1: Illustration  */}
				<div className="hidden p-6 place-items-center bg-[#081C29] sm:grid rtl:order-last">
					<Image
						className="sticky -translate-y-1/2 top-1/2"
						src="/img/team-login.png"
						width={800}
						height={600}
						alt="Illustration"
					/>
				</div>

				{/* Column 2: Login Form */}
				<div className="relative grid p-6 pb-12 overflow-y-auto text-gray-100 border-l border-gray-800/80 bg-gradient-radial from-[#0d283a] via-[#081C29] to-[#081C29] place-items-center">
					<section className="w-full max-w-md">
						<LinkWithLocale
							href="/"
							className="block w-64 max-w-full mb-16 lg:w-80 rtl:mx-auto opacity-90 hover:opacity-100"
						>
							<Icons.logoTeamDark />
						</LinkWithLocale>
						<LoginForm dictionary={allDict} />
					</section>
					{/* footer */}
					<footer className="absolute inset-x-0 bottom-0 py-4">
						<p className="text-xs tracking-wider text-center uppercase text-primary-foreground/80">
							{dict?.global?.Metalivraison} ©{" "}
							{new Date().getFullYear()} —{" "}
							{dict?.global?.copyright}
						</p>
					</footer>
				</div>
			</div>
		</main>
	);
};

export default TeamLoginPage;
