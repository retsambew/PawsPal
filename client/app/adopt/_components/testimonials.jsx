import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "@/components/cards/testimonialCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Testimonials = () => {
	return (
		<div className="px-16 my-12">
			<h2 className="text-[1.8rem] font-medium leading-8">
				True PawsPal
			</h2>
			<p className="font-light text-[#121212] text-lg mt-2">
				What our users have to say about us
			</p>
			<div className="flex gap-6 my-12">
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} testimonial={testimonial} />
				))}
			</div>
			<div className="flex justify-center">
				<Link href="/reviews">
					<Button variant="outline" size="lg">
						Explore More
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Testimonials;
