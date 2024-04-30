import OrganizationCard from "@/components/cards/organizationCard";
import { organizations } from "@/constants/organizations";
import React from "react";

const Organizations = () => {
	return (
		<div className="mt-16 px-16">
			<h2 className="text-3xl font-medium">Organizations</h2>
			<p className="text-lg font-light">
				Explore the community around you
			</p>
			<div className="grid grid-cols-4 gap-8 mt-8 px-6">
				{organizations.map((organization) => (
					<OrganizationCard
						key={organization.id}
						org={organization}
					/>
				))}
			</div>
		</div>
	);
};

export default Organizations;
