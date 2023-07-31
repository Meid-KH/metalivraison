import TrackingForm from "@/components/tracking-form";
import Heading from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dict = await getDictionary(lang);
	const formDict = {
		cta: dict?.global?.Track,
		placeholder: dict?.global?.["tracking number"],
	};
	return (
		<section className="py-24 xl:py-32">
			<div className="container">
				<Heading variant="h1" className="text-center rtl:leading-snug">
					{dict?.tracking?.title}
				</Heading>
				<TrackingForm dictionary={formDict} />
			</div>
		</section>
	);
};

export default page;
