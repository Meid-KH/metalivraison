"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const formSchema = z
	.object({
		lastName: z.string().min(2, {
			message: "Le nom doit comporter au moins 2 caractères.",
		}),
		firstName: z.string().min(2, {
			message: "Le prénom doit comporter au moins 2 caractères.",
		}),
		phone: z
			.string()
			.regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])$/, {
				message: "Numéro de téléphone invalide!",
			})
			.min(10, { message: "Doit être un numéro de téléphone valide" })
			.max(14, { message: "Doit être un numéro de téléphone valide" }),
		email: z.string().email({
			message: "Entrez un email valide.",
		}),
		password: z.string().min(6, {
			message: "Le mot de passe doit comporter au moins 6 caractères.",
		}),
		confirmPassword: z.string(),
		brand: z.string().min(2, {
			message:
				"Le nom de la boutique doit comporter au moins 2 caractères.",
		}),
		cin: z.string().min(5, {
			message: "Le CIN doit comporter au moins 5 caractères.",
		}),
		bank: z.string().min(2, {
			message:
				"Le nom de la banque doit comporter au moins 2 caractères.",
		}),
		rib: z.string().min(10, {
			message: "Le RIB doit comporter au moins 10 caractères.",
		}),
		city: z.string().min(2, {
			message: "Le nom de la ville doit comporter au moins 2 caractères.",
		}),
		address: z.string().min(5, {
			message: "L'adresse doit comporter au moins 5 caractères.",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Les mots de passe ne correspondent pas.",
		path: ["confirmPassword"],
	});

type FormValues = z.infer<typeof formSchema>;

const LoginPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			lastName: "",
			firstName: "",
			phone: "",
			email: "",
			password: "",
			confirmPassword: "",
			brand: "",
			cin: "",
			bank: "",
			rib: "",
			city: "",
			address: "",
		},
	});

	const handleRegister = async (values: FormValues) => {
		setIsLoading(true);
		try {
			// Simulate API call (you can replace this with actual authentication logic)
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log(values); // Form data
			setIsLoading(false);
		} catch (error) {
			console.error("Error during login:", error);
			setIsLoading(false);
		}
	};

	return (
		<main className="">
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
					<div className={cn("w-full")}>
						<Link href="/" className="block max-w-full mb-4 w-72">
							<Icons.logo />
						</Link>
						<h1 className="mb-12 font-medium tracking-wide text-gray-500">
							Livrer avec Metalivraison — Créez votre compte
						</h1>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(handleRegister)}
								className={cn(
									"grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
								)}
							>
								{/* lastName Field */}
								<FormField
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Nom"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* firstName Field */}
								<FormField
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Prénom"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* phone Field */}
								<FormField
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Numéro de téléphone"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* email Field */}
								<FormField
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Email"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* password Field */}
								<FormField
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													type="password"
													placeholder="Mot de passe"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* confirmPassword Field */}
								<FormField
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													type="password"
													placeholder="Confirmez mot de passe"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* brand Field */}
								<FormField
									name="brand"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Boutique, Brand"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* cin Field */}
								<FormField
									name="cin"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="CIN"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* bank Field */}
								<FormField
									name="bank"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Banque"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* rib Field */}
								<FormField
									name="rib"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="RIB"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* city Field */}
								<FormField
									name="city"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Ville"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* address Field */}
								<FormField
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													placeholder="Adresse"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<div className="flex justify-between gap-4 lg:col-span-2">
									<Link
										href="/"
										type="submit"
										className={cn(
											buttonVariants({
												variant: "outline",
											}),
											"h-14 flex gap-1 text-dark/70 items-center"
										)}
									>
										<Icons.arrowLeft
											className="w-4 h-4"
											strokeWidth={1.5}
										/>
										Retour
									</Link>
									<Button
										type="submit"
										className="max-w-[200px] h-14"
										disabled={isLoading}
									>
										{isLoading
											? "Chargement..."
											: "S'inscrire"}
									</Button>
								</div>
								<p className="pt-6 text-sm text-center lg:col-span-2 text-foreground/80">
									Vous avez dèja un compte ?{" "}
									<Link
										href="/login"
										className="underline underline-offset-4 hover:text-dark"
									>
										Connectez-vous
									</Link>
								</p>
							</form>
						</Form>
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
