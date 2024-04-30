import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialCard = (props) => {
	return (
		<div className="border rounded-lg p-6">
			<div className="flex gap-4 items-center">
				<Image
					src={props.testimonial.image}
					alt={props.testimonial.name}
					width={100}
					height={100}
					className="rounded-xl h-14 w-14 object-cover"
				/>
				<div className="flex">
					{[...Array(props.testimonial.rating)].map((star, index) => (
						<Image
							key={index}
							src="/images/paw.png"
							alt=" * "
							width={30}
							height={30}
							className="h-9 w-9"
						/>
					))}
				</div>
			</div>
			<h3 className="text-lg font-semibold mt-4">
				{props.testimonial.name}
			</h3>
			<h4 className=" text-sm">{props.testimonial.action}</h4>
			<hr className="-m-6 my-4" />
			<p className="font-medium">"{props.testimonial.review}"</p>
			<hr className="-m-6 my-4" />
			<div className="flex gap-2">
				{props.testimonial.images.map((image, index) => (
					<Link
						href={props.testimonial.imageLink || "images/dog.jpg"}
						key={index}
					>
						<Image
							src={image}
							alt={props.testimonial.name}
							width={100}
							height={100}
							className="rounded-lg object-cover p-1 h-20 w-20 hover:scale-110 transition duration-300 ease-in-out"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TestimonialCard;
