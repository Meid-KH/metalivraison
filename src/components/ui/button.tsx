import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	`inline-flex text-sm text-center items-center justify-center rounded-full ring-offset-primary/5 transition-all 
  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
  active:scale-95
  disabled:pointer-events-none disabled:opacity-50`,
	{
		variants: {
			variant: {
				default:
					"bg-dark text-primary-foreground hover:drop-shadow-xl hover:bg-dark",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-dark/20 bg-accent hover:bg-gray-100 hover:text-accent-foreground hover:drop-shadow-xl",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-14 px-7 py-1.5 text-base",
				sm: "h-10 px-3",
				lg: "h-14 px-8",
				icon: "h-12 w-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
