import { Icons } from "@/components/icons";

const loading = () => {
	return (
		<div className="grid w-full min-h-screen p-8 bg-gradient-radial from-gray-900 via-dark to-black place-items-center">
			<Icons.logoTeamDark className="w-60" />
		</div>
	);
};

export default loading;
