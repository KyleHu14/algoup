import Link from "next/link"

interface NavbarLinkProps {
	text: string
	link: string
}

export default function NavbarLink({ text, link }: NavbarLinkProps) {
	return (
		<Link
			className="text-white hover:text-zinc-400 transition ease-in-out duration-300 2xl:text-[1.2rem]"
			href={link}>
			{text}
		</Link>
	)
}
