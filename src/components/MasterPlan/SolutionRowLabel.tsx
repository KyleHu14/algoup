interface Props {
    children: React.ReactNode
}

export default function SolutionRowLabel({ children }: Props) {
    return <h3 className="font-bold lg:text-xl">{children}</h3>
}
