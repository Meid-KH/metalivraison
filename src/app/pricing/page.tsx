import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		// ...
	];
}
export default async function page() {
	const data = await getData();
	return (
		<section className="py-24">
			<div className="container">
				<h1 className="text-5xl font-black tracking-tight text-center lg:text-7xl text-primary">
					Zone de livraison <br className="" /> et{" "}
					<span className="underline underline-offset-4 text-dark/90">
						tarifs
					</span>
				</h1>
				<div className="mt-24">
					<DataTable columns={columns} data={data} />
				</div>
			</div>
		</section>
	);
}
