import Image from "next/image";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RegisterForm from "./register-form";
import LinkWithLocale from "@/components/link-with-local";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const RegisterPage: React.FC<{ params: { lang: Locale } }> = async ({
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
					"absolute z-10 grid w-20 h-20 top-6 right-6 place-items-center bg-white/80 backdrop-blur-lg",
					"transition group hover:text-white hover:bg-dark hover:scale-90 hover:drop-shadow"
				)}
			>
				<Icons.close className="group-hover:scale-125" />
			</LinkWithLocale>
			<div className="grid h-screen overflow-hidden sm:grid-cols-2">
				{/* Column 1: Illustration  */}
				<div className="hidden px-6 sm:grid place-items-center rtl:order-last">
					<Image
						src="/img/register.png"
						width={500}
						height={500}
						alt="Illustration"
					/>
				</div>

				{/* Column 2: Login Form */}
				<div className="relative overflow-y-auto bg-gray-100">
					<div className="flex flex-col w-full h-full gap-8 pt-28">
						<div
							className={cn(
								"flex-1 flex flex-col justify-center max-w-3xl px-6 xl:px-8"
							)}
						>
							<LinkWithLocale
								href="/"
								className="block w-64 max-w-full mb-8 lg:w-80 rtl:mx-auto"
							>
								{lang === "ar" ? (
									<Icons.logoAccount />
								) : (
									<Icons.logoAccount />
								)}
							</LinkWithLocale>
							<h1 className="mb-12 text-sm tracking-wide text-gray-500 rtl:text-center">
								{dict?.account?.["Deliver with Metalivraison"]}
							</h1>
							<RegisterForm dictionary={allDict} />
						</div>
						{/* footer */}
						<footer className="flex-shrink-0 py-4">
							<p className="text-xs tracking-wider text-center uppercase text-gray-500/90">
								{dict?.global?.Metalivraison} ©{" "}
								{new Date().getFullYear()} —{" "}
								{dict?.global?.copyright}
							</p>
						</footer>
					</div>
				</div>
			</div>
		</main>
	);
};

export default RegisterPage;
