interface Props {
    children: React.ReactNode
}

export default function Paragraph({ children }: Props) {
    return (
        <p className="text-md font-light xl:text-lg 2xl:text-xl">{children}</p>
    )
}
