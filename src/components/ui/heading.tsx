import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
	variant?: "h1" | "h2" | "h3" | "h4";
	as?: React.ElementType;
	className?: string;
	children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
	variant = "h2",
	as: Tag = "h1",
	className,
	children,
}) => {
	const headingClassNames = {
		h1: "text-6xl font-black tracking-tight rtl:tracking-normal lg:text-8xl text-primary",
		h2: "text-5xl font-extrabold tracking-tight md:text-6xl text-primary",
		h3: "text-4xl font-extrabold tracking-tight md:text-5xl text-primary",
		h4: "text-3xl font-extrabold md:text-4xl text-primary",
	};

	return (
		<Tag
			{...{
				className: cn(headingClassNames[variant], className),
			}}
		>
			{children}
		</Tag>
	);
};

export default Heading;
