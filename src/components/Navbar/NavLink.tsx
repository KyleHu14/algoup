import Link from "next/link"

interface NavbarLinkProps {
    text: string
    link: string
}

export default function NavLink({ text, link }: NavbarLinkProps) {
    return (
        <Link
            className="text-center text-[11px] text-black transition duration-300 ease-in-out hover:text-algoup-accent-dark md:text-sm lg:text-lg"
            href={link}
        >
            {text}
        </Link>
    )
}
