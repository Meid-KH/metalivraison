import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RegisterForm from "./register-form";

const LoginPage: React.FC = () => {
	return (
		<main className="relative">
			<Link
				href="/"
				className={cn(
					buttonVariants({ size: "icon", variant: "outline" }),
					"absolute z-10 grid w-20 h-20 top-6 right-6 place-items-center bg-white",
					"transition group hover:text-white hover:bg-dark hover:scale-90 hover:drop-shadow"
				)}
			>
				<Icons.close className="group-hover:scale-125" />
			</Link>
			<div className="grid min-h-screen grid-cols-2">
				{/* Column 1: Illustration  */}
				<div className="grid p-6 place-items-center">
					<Image
						className="sticky -translate-y-1/2 top-1/2"
						src="/img/login.png"
						width={500}
						height={500}
						alt="Illustration"
					/>
				</div>

				{/* Column 2: Login Form */}
				<div className="relative grid p-6 pb-12 bg-gray-100 xl:p-8 place-items-center">
					<div className={cn("w-full max-w-3xl")}>
						<Link href="/" className="block max-w-full mb-4 w-72">
							<Icons.logo />
						</Link>
						<h1 className="mb-12 font-medium tracking-wide text-gray-500">
							Livrer avec Metalivraison — Créez votre compte
						</h1>
						<RegisterForm />
					</div>
					{/* footer */}
					<footer className="absolute inset-x-0 bottom-0 py-4">
						<p className="text-xs tracking-wider text-center uppercase text-gray-500/90">
							Metalivraison © 2023 — Tous droits résérvés
						</p>
					</footer>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
