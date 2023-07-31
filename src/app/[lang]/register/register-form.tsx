"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import LinkWithLocale from "@/components/link-with-local";

const RegisterForm = ({
	dictionary,
}: {
	dictionary: {
		forms: { [key: string]: string };
		validation: { [key: string]: string };
	};
}) => {
	console.log(dictionary);

	const formSchema = z
		.object({
			lastName: z.string().min(2, {
				message: dictionary?.validation?.lastName,
			}),
			firstName: z.string().min(2, {
				message: dictionary?.validation?.firstName,
			}),
			phone: z
				.string()
				.regex(
					/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])$/,
					{
						message: dictionary?.validation?.phone,
					}
				)
				.min(10, { message: dictionary?.validation?.phone })
				.max(14, {
					message: dictionary?.validation?.phone,
				}),
			email: z.string().email({
				message: dictionary?.validation?.email,
			}),
			password: z.string().min(6, {
				message: dictionary?.validation?.password,
			}),
			confirmPassword: z.string(),
			brand: z.string().min(2, {
				message: dictionary?.validation?.brand,
			}),
			cin: z.string().min(5, {
				message: dictionary?.validation?.cin,
			}),
			bank: z.string().min(2, {
				message: dictionary?.validation?.bank,
			}),
			rib: z.string().min(10, {
				message: dictionary?.validation?.rib,
			}),
			city: z.string().min(2, {
				message: dictionary?.validation?.city,
			}),
			address: z.string().min(5, {
				message: dictionary?.validation?.address,
			}),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: dictionary?.validation?.confirmPassword,
			path: ["confirmPassword"],
		});

	type FormValues = z.infer<typeof formSchema>;

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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleRegister)}
				className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8")}
			>
				{/* lastName Field */}
				<FormField
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									className="h-14"
									placeholder={
										dictionary?.forms?.["Last name"]
									}
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
									placeholder={
										dictionary?.forms?.["First name"]
									}
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
									placeholder={dictionary?.forms?.Phone}
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
									placeholder={dictionary?.forms?.Email}
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
									placeholder={dictionary?.forms?.Password}
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
									placeholder={
										dictionary?.forms?.["Confirm password"]
									}
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
									placeholder={
										dictionary?.forms?.["Store/Brand"]
									}
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
									placeholder={dictionary?.forms?.["CIN"]}
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
									placeholder={dictionary?.forms?.Bank}
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
									placeholder={dictionary?.forms?.RIB}
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
									placeholder={dictionary?.forms?.City}
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
									placeholder={dictionary?.forms?.Address}
									{...field}
								/>
							</FormControl>
							<FormMessage className="ml-3 text-xs" />
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
						{dictionary?.forms?.Back}
					</LinkWithLocale>
					<Button type="submit" className="h-14" disabled={isLoading}>
						{isLoading
							? dictionary?.forms?.["Loading..."]
							: dictionary?.forms?.Register}
					</Button>
				</div>
				<p className="pt-6 text-sm text-center lg:col-span-2 text-foreground/80">
					{dictionary?.forms?.["Already registered?"]}
					<LinkWithLocale
						href="/login"
						className="mx-1.5 underline underline-offset-4 hover:text-dark"
					>
						{dictionary?.forms?.["Sign in"]}
					</LinkWithLocale>
				</p>
			</form>
		</Form>
	);
};

export default RegisterForm;
