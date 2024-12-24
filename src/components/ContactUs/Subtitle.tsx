interface Props {
    className?: string
    children: React.ReactNode
}

export default function Subtitle({ children, className = "" }: Props) {
    return (
        <h3 className={`text-lg xl:text-xl 2xl:text-2xl ${className}`}>
            {children}
        </h3>
    )
}
