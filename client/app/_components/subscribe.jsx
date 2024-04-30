import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Subscribe = () => {
	return (
		<div className="flex justify-between items-center min-h-[60vh] mb-8">
			<Image
				src={"/images/subscribe.png"}
				width={600}
				height={600}
				alt="Picture of the author"
			/>
			<div className="px-32 flex flex-col">
				<h2 className="text-3xl font-bold my-4">
					Discover the joy of pet care!
				</h2>
				<p className="font-light text-lg my-4">
					Join our newsletter to receive the latest updates and
					articles on pet care, parenting and social events customized
					to your choice.
				</p>

				<div className="flex w-full max-w-sm items-center space-x-2 mt-12">
					<Input type="email" placeholder="Email" />
					<Button type="submit">Subscribe</Button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
