import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
	return (
		<div className="p-12">
			<h3 className="text-3xl font-semibold my-8">Explore Categories</h3>
			<div className="grid grid-cols-4 gap-6">
				{categories.map((category, index) => (
					<Link
						key={index}
						href={`/categories/${category.link}`}
						passHref
					>
						<div className="flex items-center min-h-12 gap-2 py-3 px-4 mx-1 bg-[#f0f0f0] rounded-xl hover:bg-gray-300/90">
							<Image
								src={category.icon}
								alt={category.name}
								width={32}
								height={32}
							/>
							<p className="text-lg font-semibold">
								{category.name}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
