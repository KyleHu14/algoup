import Link from "next/link"

interface Props {
    link: string
    children: React.ReactNode
}

export default function SocialLinks({ link, children }: Props) {
    return (
        <Link
            className="text-md flex items-center gap-2 text-zinc-700 sm:text-lg 2xl:text-xl"
            href={link}
        >
            {children}
        </Link>
    )
}
