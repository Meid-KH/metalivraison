"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

interface LinkWithLocaleProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const LinkWithLocale: React.FC<LinkWithLocaleProps> = ({ href, ...rest }) => {
	const { lang } = useParams();

	// If the current path contains a lang parameter, use it as the prefix for the href
	const langPrefix = lang ? `/${lang}` : "";

	// Append the lang prefix to the href pathname
	const updatedHref = `${langPrefix}${href}`;

	return <Link href={href} as={updatedHref} {...rest}></Link>;
};

export default LinkWithLocale;
