import { Locale } from "@/i18n-config";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { getDictionary } from "@/get-dictionary";
import Heading from "@/components/ui/heading";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	// Must follow this shape of data:
	// {
	// 	id: string;
	// 	email: string;
	// 	city: string;
	// 	shippingFee: number;
	// 	refusalFee: number;
	// 	returnFee: number;
	// 	deliveryTime: number;
	// }

	return [
		{
			id: "728ed52e",
			city: "Agadir",
			shippingFee: 40,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52f",
			city: "Tanger",
			shippingFee: 44,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52j",
			city: "Marrakech",
			shippingFee: 41,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52h",
			city: "Casablanca",
			shippingFee: 45,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52i",
			city: "Mohamedia",
			shippingFee: 42,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52j",
			city: "Ouarzazate",
			shippingFee: 43,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52k",
			city: "Essaouira",
			shippingFee: 42,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52l",
			city: "Rabat",
			shippingFee: 40,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52m",
			city: "Kenitra",
			shippingFee: 47,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52n",
			city: "Salé",
			shippingFee: 50,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52o",
			city: "Fez",
			shippingFee: 38,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
		{
			id: "728ed52p",
			city: "Meknes",
			shippingFee: 39,
			refusalFee: 10,
			returnFee: "Gratuit",
			deliveryTime: 20,
		},
	];
}
export default async function page({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const data = await getData();
	const dict = await getDictionary(lang);
	const words = dict?.pricing?.title.split(" ");
	const TitleFirstPart = words.slice(0, -1).join(" ");
	const TitleLastWord = words[words.length - 1];

	return (
		<section className="py-24 xl:py-32">
			<div className="container">
				<Heading variant="h1" className="text-center rtl:leading-snug">
					{/* Zone de livraison <br className="" /> et{" "}
					<span className="text-dark/90">tarifs</span> */}
					{TitleFirstPart} <br className="" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-dark via-gray-700 to-gray-500">
						{TitleLastWord}
					</span>
				</Heading>
				<div className="mt-24">
					<DataTable
						columns={columns}
						data={data}
						dictionary={dict?.global}
					/>
				</div>
			</div>
		</section>
	);
}

//  Dynamic metadata
export async function generateMetadata({
	params,
}: {
	params: { lang: Locale };
}) {
	const dict = await getDictionary(params?.lang);
	console.log(dict?.metadata);

	return {
		title: `${dict?.metadata?.title} | ${dict?.pricing?.title}`,
	};
}
