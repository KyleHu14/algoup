import Link from "next/link"

interface MobileLinkProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement>
    text: string
    link: string
}

export default function MobileLinkProps({
    text,
    link,
    onClick,
}: MobileLinkProps) {
    return (
        <Link
            onClick={onClick}
            className="text-center text-lg font-semibold text-black"
            href={link}
        >
            {text}
        </Link>
    )
}
