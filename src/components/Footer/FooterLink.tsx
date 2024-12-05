import Link from "next/link"
import ColumnSubTitle from "./ColumnSubTitle"

interface Props {
    href: string
    children: React.ReactNode
}

export default function FooterLink({ href, children }: Props) {
    return (
        <Link href={href}>
            <ColumnSubTitle className="hover:text-algoup-accent-dark">
                {children}
            </ColumnSubTitle>
        </Link>
    )
}
