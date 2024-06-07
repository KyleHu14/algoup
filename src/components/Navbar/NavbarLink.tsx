import Link from "next/link";

interface NavbarLinkProps {
    text: string;
    link: string;
}

export default function NavbarLink({ text, link }: NavbarLinkProps) {
    return (
        <Link
            className="font-semibold text-black transition duration-300 ease-in-out hover:text-orange-400 xl:text-[0.9rem] 2xl:text-[1.2rem]"
            href={link}
        >
            {text}
        </Link>
    );
}
