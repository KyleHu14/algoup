import Link from "next/link"

// Icons
import { ArrowUpRight } from "lucide-react"

interface Props {
    href: string
    children: React.ReactNode
}

export default function FooterLink({ children, href }: Props) {
    return (
        <Link
            className="flex items-center text-[11px] md:text-sm lg:text-lg xl:text-xl"
            href={href}
        >
            <p className="duration-300 hover:text-algoup-accent">{children}</p>
            <ArrowUpRight className="h-7 w-7 text-algoup-accent" />
        </Link>
    )
}
