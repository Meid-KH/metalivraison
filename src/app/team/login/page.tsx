"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
	email: z
		.string()
		.email({
			message: "Entrez un email valide.",
		})
		.min(2, {
			message: "Entrez un email valide.",
		}),
	password: z.string().min(6, {
		message: "Mote de passe doit comporter au moins 6 caractères.",
	}),
	rememberme: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const LoginPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberme: false,
		},
	});

	const handleLogin = async (values: FormValues) => {
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
			<div className="grid h-screen grid-cols-2 overflow-hidden">
				{/* Column 1: Illustration  */}
				<div className="grid p-6 place-items-center">
					<Image
						src="/img/team-login.png"
						width={800}
						height={600}
						alt="Illustration"
					/>
				</div>

				{/* Column 2: Login Form */}
				<div className="relative grid p-6 pb-12 overflow-y-auto bg-gray-100 place-items-center">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleLogin)}
							className="w-full max-w-md"
						>
							<Link
								href="/"
								className="block max-w-full mb-16 w-72"
							>
								<Icons.logo />
							</Link>
							<div className="space-y-6 xl:space-y-8___">
								{/* Email Field */}
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

								{/* Password Field */}
								<FormField
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="h-14"
													type="password"
													placeholder="Password"
													{...field}
												/>
											</FormControl>
											<FormMessage className="ml-3 text-xs" />
										</FormItem>
									)}
								/>

								{/* Remember me */}
								<FormField
									control={form.control}
									name="rememberme"
									render={({ field }) => (
										<FormItem className="flex items-center gap-2">
											<FormControl>
												<Checkbox
													id="terms"
													checked={field.value}
													onCheckedChange={
														field.onChange
													}
												/>
											</FormControl>
											<FormLabel
												htmlFor="terms"
												className="!m-0"
											>
												Se souvenir de moi
											</FormLabel>
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<div className="">
									<Button
										type="submit"
										className="gap-2 xl:col-span-2 w-full max-w-[200px] h-14 ml-auto flex"
										disabled={isLoading}
									>
										{isLoading
											? "Chargement..."
											: "Se connecter"}
									</Button>
								</div>
							</div>
						</form>
					</Form>
					{/* footer */}
					<footer className="absolute inset-x-0 bottom-0 py-4">
						<p className="text-xs tracking-wider text-center text-gray-500/90 uppercase">
							Metalivraison © 2023 — Tous droits résérvés
						</p>
					</footer>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
