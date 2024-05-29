import Image from "next/image"

import NavbarLink from "./NavbarLink"

export default function DashboardNavbar() {
	return (
		<nav className="sticky top-0 z-50 w-full bg-zinc-800">
			<div className="flex justify-between py-6 px-5">
				<div className="flex items-center">
					<NavbarLink link="/" text="ALGOUP" />
				</div>

				<div className="flex items-center gap-8">
					<NavbarLink link="/" text="Home" />
					<NavbarLink link="/products" text="Products" />
					<NavbarLink link="/technology" text="Technology" />
					<NavbarLink
						link="/manufacturing"
						text="Manufacturing Capability"
					/>
					<NavbarLink link="/service" text="Service" />
					<NavbarLink link="/news" text="News" />
					<NavbarLink link="/projects" text="Projects" />
					<NavbarLink link="/about" text="About Us" />
					<button className="bg-white text-black p-2 rounded-lg 2xl:text-[1.1rem]">
						Contact Us
					</button>
				</div>
			</div>
		</nav>
	)
}
