import PetCard from "@/components/cards/swipeCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className="flex items-center justify-between gap-20 min-h-screen mt-10">
			<div className="flex flex-col gap-6">
				<h2 className="text-5xl font-bold max-w-[50vw]">
					Find, adopt, and care for lovable pets
				</h2>
				<p className="text-xl font-light text-[#121212] max-w-[30vw]">
					Platform with over 7,000 adorable pets and more than 1,000
					rescue organizations
				</p>
				<div className="mt-6">
					<Link href="/adopt">
						<Button className="w-40">Adopt now</Button>
					</Link>
					<Button variant="outline" className="ml-4 w-40">
						Help Paws
					</Button>
					{/* fundraising */}
				</div>
				<div></div>
			</div>
			<div>
				{/* Pet in need waiting for adoption card*/}
				{/* Carousel */}
				<PetCard />
			</div>
		</div>
	);
};

export default Hero;
