import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

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
export default async function page() {
	const data = await getData();
	return (
		<section className="py-24 xl:py-32">
			<div className="container">
				<h1 className="text-5xl font-black tracking-tight text-center lg:text-8xl text-primary">
					Zone de livraison <br className="" /> et{" "}
					<span className="text-dark/90">tarifs</span>
				</h1>
				<div className="mt-24">
					<DataTable columns={columns} data={data} />
				</div>
			</div>
		</section>
	);
}
