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

	return (
		<main className="relative">
			<LinkWithLocale
				href="/"
				className={cn(
					buttonVariants({ size: "icon", variant: "outline" }),
					"absolute z-10 grid w-20 h-20 top-6 right-6 place-items-center bg-white",
					"transition group hover:text-white hover:bg-dark hover:scale-90 hover:drop-shadow"
				)}
			>
				<Icons.close className="group-hover:scale-125" />
			</LinkWithLocale>
			<div className="grid min-h-screen sm:grid-cols-2">
				{/* Column 1: Illustration  */}
				<div className="hidden p-6 sm:grid rtl:order-last">
					<Image
						className="sticky -translate-y-1/2 top-1/2"
						src="/img/register.png"
						width={500}
						height={500}
						alt="Illustration"
					/>
				</div>

				{/* Column 2: Login Form */}
				<div className="relative grid px-6 pt-32 bg-gray-100 xl:px-8 place-items-center pb-14">
					<div className={cn("w-full max-w-3xl")}>
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
						<h1 className="mb-12 text-sm tracking-wide text-gray-500">
							{dict?.account?.["Deliver with Metalivraison"]}
						</h1>
						<RegisterForm dictionary={dict?.forms} />
					</div>
					{/* footer */}
					<footer className="absolute inset-x-0 bottom-0 py-4">
						<p className="text-xs tracking-wider text-center uppercase text-gray-500/90">
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

export default RegisterPage;
