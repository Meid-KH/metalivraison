import { Icons } from "@/components/icons";
import TrackingForm from "@/components/tracking-form";
import Heading from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dict = await getDictionary(lang);
	const formDict = {
		cta: dict?.global?.Track,
		placeholder: dict?.global?.["tracking number"],
		validationMessage: dict?.global?.validation?.trackingNumber,
	};
	return (
		<section className="py-24 xl:py-32">
			<div className="container">
				<Heading variant="h1" className="text-center rtl:leading-snug">
					{dict?.tracking?.title}
				</Heading>
				<TrackingForm dictionary={formDict} />
				{/* Delivery process -- timeline */}
				<div className="overflow-x-auto">
					<ul
						className={cn(
							"relative w-[740px] md:w-full flex items-center justify-between pt-48 pb-28 overflow-hidden px-20___"
							// "before:content-[''] before:absolute before:w-screen before:h-1 before:bg-gray-400 before:inset-x-0 before:top-1/2 before:-translate-y-1/2"
						)}
					>
						<li
							className={cn(
								"relative flex-1___",
								"before:content-[''] before:absolute before:w-screen before:h-1 before:bg-primary before:inset-x-0 before:top-1/2 before:-translate-y-1/2"
							)}
						>
							<span
								className={
									"relative grid w-16 h-16 text-white bg-primary rounded-full place-items-center"
								}
							>
								<Icons.check className="w-8 h-8" />
							</span>
							<div className="absolute left-0 overflow-hidden text-center -translate-y-4 border border-primary w-max -translate-x-1/2___ rounded-xl bottom-full">
								<div className="p-4">
									<h2 className="">Colis Ramassé</h2>
								</div>
								<footer className="flex justify-between gap-3 p-3 text-xs text-white bg-primary">
									<span>Casablanca</span>
									<span>14/06/2022 18:52</span>
								</footer>
							</div>
						</li>

						<li
							className={cn(
								"relative flex-1___",
								"before:content-[''] before:absolute before:w-screen before:h-1 before:bg-primary before:inset-x-0 before:top-1/2 before:-translate-y-1/2"
							)}
						>
							<span
								className={
									"relative grid w-16 h-16 text-white bg-primary rounded-full place-items-center"
								}
							>
								<Icons.truck
									className="w-11 h-11"
									strokeWidth={4}
								/>
							</span>
						</li>

						<li
							className={cn(
								"relative flex-1___",
								"before:content-[''] before:absolute before:w-screen before:h-1 before:bg-primary before:inset-x-0 before:top-1/2 before:-translate-y-1/2"
							)}
						>
							<span
								className={
									"relative grid w-16 h-16 text-white bg-primary rounded-full place-items-center"
								}
							>
								<Icons.cogTriple
									className="w-12 h-12"
									strokeWidth={1}
								/>
							</span>
							<div className="absolute overflow-hidden text-center -translate-x-1/2 -translate-y-4 border border-primary left-1/2 w-max rounded-xl bottom-full">
								<div className="p-4">
									<h2 className="">Colis Ramassé</h2>
								</div>
								<footer className="flex justify-between gap-3 p-3 text-xs text-white bg-primary">
									<span>Fes</span>
									<span>14/06/2022 18:52</span>
								</footer>
							</div>
						</li>

						<li
							className={cn(
								"relative flex-1___",
								"before:content-[''] before:absolute before:w-screen before:h-1 before:bg-gray-400 before:inset-x-0 before:top-1/2 before:-translate-y-1/2"
							)}
						>
							<span
								className={
									"relative grid w-16 h-16 text-white bg-gray-400 rounded-full place-items-center"
								}
							>
								<Icons.bike
									className="w-9 h-9"
									strokeWidth={1.5}
								/>
							</span>
						</li>

						<li className={cn("relative flex-1___")}>
							<span
								className={
									"relative grid w-16 h-16 text-white bg-gray-400 rounded-full place-items-center"
								}
							>
								<Icons.thumb
									className="w-8 h-8"
									strokeWidth={1.5}
								/>
							</span>
							<div className="absolute right-0 overflow-hidden text-center -translate-y-4 border border-gray-400 w-max -translate-x-1/2___ rounded-xl bottom-full">
								<div className="p-4">
									<h2 className="">Colis Ramassé</h2>
								</div>
								<footer className="flex justify-between gap-3 p-3 text-xs text-white bg-gray-400">
									<span>--</span>
									<span>-- -</span>
								</footer>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default page;

//  Dynamic metadata
export async function generateMetadata({
	params,
}: {
	params: { lang: Locale };
}) {
	const dict = await getDictionary(params?.lang);
	console.log(dict?.metadata);

	return {
		title: `${dict?.metadata?.title} | ${dict?.tracking?.title}`,
	};
}
