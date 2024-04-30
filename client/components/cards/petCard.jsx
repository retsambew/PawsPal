import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PetCard = (props) => {
	return (
		<div className="p-8 border shadow-lg rounded-lg">
			<div className="flex gap-4">
				<Image
					src={props.pet.profile}
					alt={props.pet.name}
					width={50}
					height={50}
					className="rounded-lg object-cover h-32 w-32 mb-4"
				/>
				<div className="mt-6">
					<p className="text-xs font-light">{props.pet.type}</p>
					<h2 className="text-xl font-medium">{props.pet.name}</h2>
					<p className="text-sm">{props.pet.breed}</p>
					<p className="text-sm font-light">
						{props.pet.age} Years old
					</p>
				</div>
			</div>
			<ScrollArea className="flex whitespace-nowrap pb-4 gap-4">
				{props.pet.tags.map((tag) => (
					<Badge variant="secondary">{tag}</Badge>
				))}
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<Button>View Details</Button>
		</div>
	);
};

export default PetCard;
