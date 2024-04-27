import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const HomeHero = () => {
	return (
		<div className="flex flex-col bg-[#f0f0f0] px-16">
			<h2 className="text-5xl font-semibold max-w-[50vw] mt-[38vh] mb-20">
				Your ultimate pet adoption platform.
				{/* <br /> Adopt. Donate. Connect. */}
			</h2>
			<div className="flex w-full max-w-[55vw] items-center space-x-2 bg-white px-6 py-4 mb-20 rounded-lg">
				<Input placeholder="Search for pets or categories" />
				<Button type="submit" variant="outline" className="w-24">
					Find
				</Button>
			</div>{" "}
		</div>
	);
};

export default HomeHero;
