interface Props {
    className?: string
    children: React.ReactNode
}

export default function Title({ className = "", children }: Props) {
    return (
        <h2 className={`w-full text-xl xl:text-2xl 2xl:text-3xl ${className}`}>
            {children}
        </h2>
    )
}
