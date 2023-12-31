import { Icons } from "@/components/icons";

const loading = () => {
	return (
		<div className="grid w-full min-h-screen p-8 text-gray-200 bg-gradient-radial from-gray-900 via-dark to-black place-items-center">
			<div className="space-y-3">
				<Icons.logoTeamDark className="w-60" />
				<div className="text-lg font-semibold text-center">
					chargement...
				</div>
			</div>
		</div>
	);
};

export default loading;
