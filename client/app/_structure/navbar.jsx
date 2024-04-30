import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
	return (
		<div className="flex py-4 px-16 justify-between fixed w-screen bg-white text-black z-50">
			<Link href="/">
				<h1 className="font-semibold text-2xl content-center">
					{/* <Image src={logo} width={100} height={100} /> */}
					PawsPal
				</h1>
			</Link>
			{/* <button className="bg-[#121212] text-white px-10 py-3 rounded-xl text-sm font-medium"> */}
			<div className="flex items-center gap-4">
				<SignedOut>
					<Link href="/sign-in">
						<Button>Sign In</Button>
					</Link>
				</SignedOut>
				<SignedIn>
					<Link href="/" className="hover:scale-105 transition">
						Home
					</Link>
					<Link href="/adopt" className="hover:scale-105 transition">
						Adopt
					</Link>
					<Link
						href="/volunteer"
						className="hover:scale-105 transition"
					>
						Volunteer
					</Link>
					<Link
						href="/resources"
						className="hover:scale-105 transition"
					>
						Resources
					</Link>
					<Link href="/donate">
						<Button size="sm">Donate</Button>
					</Link>
					<UserButton />
				</SignedIn>
			</div>
			{/* <Link href="/home">
				<Button>Sign In</Button>
			</Link> */}
		</div>
	);
};

export default Navbar;
