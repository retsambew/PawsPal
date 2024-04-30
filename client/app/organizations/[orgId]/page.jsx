"use client";
import PetCard from "@/components/cards/petCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getOrganization } from "@/constants/organizations";
import { findPet } from "@/constants/pets";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import {
	IoLocationSharp,
	IoCallSharp,
	IoStar,
	IoStarOutline,
} from "react-icons/io5";
import Rating from "react-rating";

const OrganizationPage = ({ params }) => {
	const orgId = params.orgId;
	const organization = getOrganization(orgId);

	return (
		<div>
			<div className="h-16"></div>
			<Image
				src={organization.banner}
				width={600}
				height={200}
				className="w-full h-[40vh] object-cover filter brightness-75"
			/>
			<div className="px-32 ">
				<div className="flex gap-8">
					<Image
						src={organization.profile}
						width={100}
						height={100}
						className="h-72 w-72 object-cover rounded-full border-4 border-white -mt-20 z-10 relative shadow-lg"
					/>
					<div className="my-8">
						<h2 className="text-3xl font-bold">
							{organization.name}
						</h2>
						<p className="font-light text-sm">
							@{organization.orgHandle}
						</p>
						<h3 className="mt-4 text-2xl font-semibold">
							{organization.motto}
						</h3>
						<h3>{organization.description}</h3>
						<div className="flex gap-16 mt-4 text-sm font-light">
							<h3 className="flex gap-2 items-center">
								<IoLocationSharp className="text-lg" />
								{organization.address}
							</h3>
							<h3 className="flex gap-2 items-center">
								<IoMdMail className="text-lg" />
								{organization.email}
							</h3>
							<h3 className="flex gap-2 items-center">
								<IoCallSharp className="text-lg" />
								{organization.phone}
							</h3>
						</div>
					</div>
				</div>
				<hr className="-mx-32 my-4" />
				<div className="flex gap-6">
					<div className="w-4/6">
						<Tabs defaultValue="pets">
							<div className="flex justify-center mb-6">
								<TabsList>
									<TabsTrigger value="images">
										Gallery
									</TabsTrigger>
									<TabsTrigger value="pets">Pets</TabsTrigger>
									<TabsTrigger value="reviews">
										Reviews
									</TabsTrigger>
								</TabsList>
							</div>
							<TabsContent value="images">
								<div className="grid grid-cols-3 gap-4">
									{organization.images.map((image, index) => (
										<Image
											key={index}
											src={image}
											alt={organization.name}
											width={200}
											height={200}
											className="rounded-lg object-cover p-1"
										/>
									))}
								</div>
							</TabsContent>
							<TabsContent value="pets">
								<div className="grid grid-cols-2 gap-4">
									{organization.pets.map((pet, index) => (
										<PetCard
											key={index}
											pet={findPet(pet)}
										/>
									))}
								</div>
							</TabsContent>
							<TabsContent value="reviews">
								<div>
									<h3 className="text-2xl">Reviews</h3>
									{organization.reviews.map(
										(review, index) => (
											<div
												key={index}
												className="text-base my-8"
											>
												<Rating
													initialRating={
														review.rating
													}
													emptySymbol={
														<IoStarOutline />
													}
													fullSymbol={<IoStar />}
													readonly
												/>
												<h4 className="font-medium">
													by {review.userHandle}
												</h4>
												<p>{review.review}</p>
												<Separator className="my-4" />
											</div>
										)
									)}
								</div>
							</TabsContent>
						</Tabs>
					</div>
					<div className="w-2/6 h-[92vh] sticky top-16 shadow-lg bg-slate-100 p-4">
						<div className="flex gap-4 my-4 items-center justify-evenly">
							<p className="text-4xl">{organization.rating}</p>
							<span className=" text-yellow-400 text-xl">
								<Rating
									initialRating={organization.rating}
									emptySymbol={<IoStarOutline />}
									fullSymbol={<IoStar />}
									readonly
								/>
								<p className="text-[#121212] font-light text-sm">
									{organization.reviews.length} reviews
								</p>
							</span>
							<Button variant="outline">Add a review</Button>
						</div>
						<Separator />
						<div>
							<p>Pets: {organization.pets.length}</p>
							<p>Followers: {organization.followers}</p>
						</div>
						<div className="flex gap-4 mt-4 justify-center">
							<Button variant="outline">Follow</Button>
							<Button variant="outline">Donate</Button>
							<Button variant="outline">Visit Us</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganizationPage;
