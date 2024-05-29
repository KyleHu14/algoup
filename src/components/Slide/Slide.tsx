interface SlideProps {
	center: string
	bgColor: string
	bgImage: string
	children: React.ReactNode
}

export default function Slide({
	center,
	bgColor,
	bgImage,
	children,
}: SlideProps) {
	return (
		<div
			className={`w-full h-screen flex gap-12 px-10 bg-no-repeat bg-cover ${center} ${bgColor}`}>
			{children}
		</div>
	)
}
