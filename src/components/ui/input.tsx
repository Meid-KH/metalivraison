import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-14 w-full rounded-full border border-dark/20 bg-background",
					"px-6 py-2 text-sm ring-offset-primary/5",
					"file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/75",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"hover:border-dark/75 hover:border-2",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
