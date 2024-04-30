import PetCard from "@/components/cards/petCard";
import { pets } from "@/constants/pets";

const PetMatches = () => {
	return (
		<div className="px-12 mt-6 mb-20">
			<h3 className="text-[1.8rem] font-medium leading-8">
				Your Partner in Crime
			</h3>
			<p className="font-light text-[#121212] text-lg mt-2">
				Unite with the pets of your dream
			</p>

			<div className="grid grid-cols-4 gap-6 my-12">
				{pets.map((pet) => (
					<PetCard key={pet.id} pet={pet} />
				))}
			</div>
		</div>
	);
};

export default PetMatches;
