"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import LinkWithLocale from "@/components/link-with-local";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

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

export const LoginForm = ({
	dictionary,
}: {
	dictionary: { [key: string]: string };
}) => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleLogin)} className="">
				<div className="space-y-6 lg:space-y-8">
					{/* Email Field */}
					<FormField
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="h-14"
										placeholder={dictionary?.["Email"]}
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
										placeholder={dictionary?.["Password"]}
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
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel htmlFor="terms" className="!m-0">
									{dictionary?.["Remember me"]}
								</FormLabel>
							</FormItem>
						)}
					/>

					{/* Submit Button */}
					<div className="flex justify-between gap-4 rtl:gap-5 lg:col-span-2">
						<LinkWithLocale
							href="/"
							className={cn(
								buttonVariants({
									variant: "outline",
								}),
								"flex gap-1 text-dark/70 items-center rtl:order-last"
							)}
						>
							<Icons.arrowLeft className="w-4 h-4 rtl:order-last" />
							{dictionary?.Back}
						</LinkWithLocale>
						<Button
							type="submit"
							className="h-14"
							disabled={isLoading}
						>
							{isLoading
								? dictionary?.["Loading..."]
								: dictionary?.Register}
						</Button>
					</div>

					<p className="pt-6 text-sm text-center text-foreground/80">
						{dictionary?.["Not registered yet?"]}
						<LinkWithLocale
							href="/register"
							className="underline underline-offset-4 hover:text-dark mx-1.5"
						>
							{dictionary?.["Sign up"]}
						</LinkWithLocale>
					</p>
				</div>
			</form>
		</Form>
	);
};
