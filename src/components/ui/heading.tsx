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
		h1: "text-6xl font-black tracking-tight rtl:tracking-normal lg:text-8xl rtl:leading-[1.15]",
		h2: "text-5xl font-extrabold tracking-tight md:text-6xl",
		h3: "text-4xl font-extrabold tracking-tight md:text-5xl",
		h4: "text-3xl font-extrabold md:text-4xl",
	};

	return (
		<Tag
			{...{
				className: cn(
					"rtl:leading-normal text-transparent bg-clip-text bg-gradient-to-br from-[#0165ca] to-primary",
					headingClassNames[variant],
					className
				),
			}}
		>
			{children}
		</Tag>
	);
};

export default Heading;
