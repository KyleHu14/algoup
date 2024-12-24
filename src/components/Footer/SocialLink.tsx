import Link from "next/link"

interface Props {
    link: string
    children: React.ReactNode
}

export default function SocialLink({ link, children }: Props) {
    return (
        <Link
            className="text-md group flex h-6 w-6 items-center gap-2 text-typography-secondary/90 duration-300 hover:text-algoup-accent sm:text-lg xl:h-7 xl:w-7 2xl:text-xl"
            href={link}
        >
            {children}
        </Link>
    )
}
