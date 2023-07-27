import { getDictionary } from "@/get-dictionary";
import SiteLayout from "./site-layout";
import { Locale } from "@/i18n-config";

const TranslationPrivder = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const dictionary = async (locale: Locale) => {
		"use server";
		return await getDictionary(locale as Locale);
	};

	// console.log(dictionary("ar"));

	return (
		<div>
			<SiteLayout dictionary={dictionary}>{children}</SiteLayout>
		</div>
	);
};

export default TranslationPrivder;
