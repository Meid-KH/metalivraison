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
import { Icons } from "./icons";

const TrackingForm = ({
	dictionary,
}: {
	dictionary?: { [key: string]: string };
}) => {
	const formSchema = z.object({
		trackingNumber: z.string().min(6, {
			message: dictionary?.validationMessage,
		}),
	});
	// console.log(dictionary);

	// 1. Define the form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			trackingNumber: "",
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
				className="flex max-w-2xl gap-4 mx-auto mt-12"
			>
				<FormField
					control={form.control}
					name="trackingNumber"
					render={({ field }) => (
						<FormItem className="w-full">
							{/* <FormLabel className="text-xs">
								Votre N° de suivi
							</FormLabel> */}
							<FormControl>
								<Input
									placeholder={dictionary?.placeholder}
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-xs text-center" />
						</FormItem>
					)}
				/>
				<Button type="submit" className="flex-shrink-0 gap-2">
					<span className="hidden sm:inline-block">
						{dictionary?.cta}
					</span>
					<Icons.search className="h-5 w56" strokeWidth={1.5} />
				</Button>
			</form>
		</Form>
	);
};

export default TrackingForm;
