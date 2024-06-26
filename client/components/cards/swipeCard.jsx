import Image from "next/image";
import { Button } from "../ui/button";

const PetSwipeCard = (props) => {
	return (
		<div className="bg-[#f0f0f0] rounded-lg min-w-80">
			<div className="px-12 py-20 rounded-lg">
				<Image
					src={props.src || "https://via.placeholder.com/300"}
					alt="pet"
					width={300}
					height={300}
					className="rounded-lg h-60 w-60 object-cover"
				/>
			</div>
			<div className="bg-[#2d2d2d] text-white p-4">
				<div className="flex gap-6 mb-4">
					<div className="w-full">
						<h4 className="text-sm font-light">1.2Yr Old</h4>
						<h3 className="font-medium">Bella</h3>
					</div>
					<div className="w-full">
						<h4 className="text-sm font-light">German Shepherd</h4>
						<h3 className="font-medium">Dog</h3>
					</div>
				</div>
				<div className="flex justify-between gap-4">
					<Button variant="white" className="w-full">
						Adopt now
					</Button>
					<Button variant="white" className="w-full">
						View Pet
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PetSwipeCard;
