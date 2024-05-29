interface FooterLinkProps {
	text: string
	link: string
}

export default function FooterLink({ text, link }: FooterLinkProps) {
	return (
		<a className="text-white block font-semibold 2xl:text-2xl" href={link}>
			{text}
		</a>
	)
}
