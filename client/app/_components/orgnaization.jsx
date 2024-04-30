import OrganizationCard from "@/components/cards/organizationCard";
import { organizations } from "@/constants/organizations";

const Orgnaization = () => {
	return (
		<div className="my-10">
			<h2 className="text-[1.8rem] font-medium leading-8">
				Explore True PawsPals
			</h2>
			<p className="font-light text-[#121212] text-lg mt-2">
				Visit and help the top rescue organizations and shelters in your
				area
			</p>
			<div className="flex gap-6 mt-8">
				{organizations.map((org, index) => (
					<OrganizationCard key={index} org={org} />
				))}
			</div>
		</div>
	);
};

export default Orgnaization;
