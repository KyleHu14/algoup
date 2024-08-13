export default function FooterIcon({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-zinc-800 2xl:w-16 2xl:h-16 2xl:p-3 w-12 h-12 p-[0.6rem]">
			<span className="2xl:[&>svg]:h-10 2xl:[&>svg]:w-10 [&>svg]:w-7 [&>svg]:h-7  text-zinc-400">
				{children}
			</span>
		</div>
	)
}
