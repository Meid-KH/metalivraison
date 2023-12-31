"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Entrez un nom valide.",
	}),
	email: z
		.string()
		.email({
			message: "Entrez un email valide.",
		})
		.min(2, {
			message: "Entrez un email valide.",
		}),
	message: z.string().min(3, {
		message: "Message trop court.",
	}),
	phone: z
		.string()
		.regex(
			new RegExp(
				/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
			),
			"Entrez un numero de téléphone valide."
		)
		.min(10, { message: "Doit être un numero de téléphone valide" })
		.max(14, { message: "Doit être un numero de téléphone valide" }),
});

const ContactForm: React.FC<{
	className: string;
	dictionary?: { [key: string]: string };
}> = ({ className, dictionary }) => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn(
					className,
					"space-y-6 xl:space-y-8___ rounded-2xl border border-gray-200 bg-gray-100 p-4 lg:p-6"
				)}
			>
				<div className="grid gap-6 xl:gap-8___ grid-col-1 xl:grid-cols-2">
					<div className="space-y-6 xl:space-y-8___">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											placeholder={
												dictionary?.["Full name"]
											}
											{...field}
										/>
									</FormControl>
									<FormMessage className="ml-3 text-xs" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											placeholder={dictionary?.["Email"]}
											{...field}
										/>
									</FormControl>
									<FormMessage className="ml-3 text-xs" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											placeholder={dictionary?.["Phone"]}
											{...field}
										/>
									</FormControl>
									<FormMessage className="ml-3 text-xs" />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Textarea
										className="h-full"
										placeholder={
											dictionary?.["Your message"]
										}
										{...field}
									/>
								</FormControl>
								<FormMessage className="ml-3 text-xs" />
							</FormItem>
						)}
					/>
				</div>
				<Button
					type="submit"
					className="flex-shrink-0 gap-2 xl:col-span-2"
				>
					{dictionary?.["Send"]}
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
