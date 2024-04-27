import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	return (
		<div className="flex py-4 px-16 justify-between fixed w-screen">
			<h1 className="font-semibold text-2xl">
				{/* <Image src={logo} width={100} height={100} /> */}
				PawsPal
			</h1>
			{/* <button className="bg-[#121212] text-white px-10 py-3 rounded-xl text-sm font-medium"> */}
			<Button>Sign In</Button>
		</div>
	);
};

export default Navbar;
