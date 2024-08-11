interface FooterLinkProps {
    text: string
    link: string
}

export default function FooterLink({ text, link }: FooterLinkProps) {
    return (
        <a
            className="block text-xl font-semibold text-white 2xl:text-2xl"
            href={link}
        >
            {text}
        </a>
    )
}
