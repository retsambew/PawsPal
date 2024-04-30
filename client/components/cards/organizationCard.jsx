import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const OrganizationCard = (props) => {
	return (
		<div>
			<Image
				src={props.org.banner}
				alt={props.org.name}
				width={600}
				height={200}
				className="rounded-lg h-32 object-cover filter brightness-75"
			/>
			<div className="bg-[#121212] rounded-lg text-white p-4">
				<div className="flex items-center gap-3">
					<Image
						src={props.org.profile}
						alt={props.org.name}
						width={50}
						height={50}
						className="rounded-full h-16 w-16 object-cover p-1"
					/>
					<div>
						<h3 className="font-bold">{props.org.name}</h3>
						<h4 className="font-light text-xs">
							@{props.org.orgHandle}
						</h4>
					</div>
				</div>
				<div className="flex justify-between p-2">
					<div>
						<h4 className="font-light text-xs">Paws</h4>
						<p className="font-medium">{props.org.pets}</p>
					</div>
					<div>
						<h4 className="font-light text-xs">Followers</h4>
						<p className="font-medium">{props.org.followers}</p>
					</div>
					<Link href={`/organization/${props.org.orgHandle}`}>
						<Button variant="white" size="sm">
							Support
						</Button>
					</Link>
				</div>
				<div className="flex gap-2">
					{props.org.images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={props.org.name}
							width={100}
							height={100}
							className="rounded-lg object-cover p-1 h-20 w-20"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default OrganizationCard;
