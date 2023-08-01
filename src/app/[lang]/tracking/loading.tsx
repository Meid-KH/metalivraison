import { Icons } from "@/components/icons";

const loading = () => {
	return (
		<div className="grid w-full min-h-screen p-8 place-items-center">
			<div className="space-y-3">
				<Icons.logoDark className="w-60" />
				<div className="text-lg font-semibold text-center">
					chargement...
				</div>
			</div>
		</div>
	);
};

export default loading;
