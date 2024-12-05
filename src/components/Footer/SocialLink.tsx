import Link from "next/link"

interface Props {
    link: string
    children: React.ReactNode
}

export default function SocialLink({ link, children }: Props) {
    return (
        <Link
            className="text-md group flex items-center gap-2 text-typography-secondary/90 hover:text-algoup-accent sm:text-lg 2xl:text-xl"
            href={link}
        >
            {children}
        </Link>
    )
}
