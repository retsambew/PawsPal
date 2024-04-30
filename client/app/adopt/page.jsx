import Categories from "./_components/categories";
import HomeHero from "./_components/hero";
import PetMatches from "./_components/matches";
import Testimonials from "./_components/testimonials";

const ExplorePage = () => {
	return (
		<div>
			<HomeHero />
			<Categories />
			<PetMatches />
			<Testimonials />
		</div>
	);
};

export default ExplorePage;
